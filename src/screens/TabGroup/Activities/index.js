import { useContext } from 'react';
import {
    Container,
    Header,
    Main,
    Input,
    SearchButton,
    ContainerSearch,
    SearchList,
    MainList,
    FIlterButton,
    Modal,
    ModalContiner,
    FilterContainer,
    FilterHeader,
    CloseModalButton,
    Details,
    FilterOptions,
    FilterButton,
    Scroll,
} from './styles'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TextRegular, TextSubTitle } from '../../../components/Texts'
import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'
import Card from '../../../components/_Screens/Activities/Card';
import HeroContainer from '../../../components/HeroContainer';
import Line from '../../../components/Line'

import ActivitiesAdventure from '../ActivitiesAdventure'
import ActivitiesTour from '../ActivitiesTour';

import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import data from '../../../../data';
import theme from '../../../global/styles/theme';

import LanguageSelector from '../../../utils/LanguageSelector';

const TopTab = createMaterialTopTabNavigator()

function ActivitiesTopTabs() {

    return (
        <TopTab.Navigator
            initialRouteName='Aventura'
            screenOptions={{
                tabBarStyle: { backgroundColor: theme.colors.light },
                tabBarIndicatorStyle: { backgroundColor: theme.colors.green }
            }}
        >
            <TopTab.Screen
                name='Aventura'
                component={ActivitiesAdventure}
            />
            <TopTab.Screen
                name='Passeio'
                component={ActivitiesTour}
            />
        </TopTab.Navigator>
    )
}

const Activities = () => {

    const { portuguese, english, language } = useContext(LanguageSelector);

    const [input, setInput] = useState('')
    const [arrSearch, setArrSearch] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    const [filter, setFilter] = useState('')
    const [isSelected, setIsSelected] = useState(false)
    const [categorieFiltered, setCategorieFiltered] = useState([])
    const [categories, setCategories] = useState([])
    const [displayPrimary, setDisplayPrimary] = useState('flex')
    const [displaySecondary, setDisplaySecondary] = useState('none')


    let activitiesData = data.filter((item) => {
        return item.type == 'tourism'
    })

    let categoriesFiltered = activitiesData.filter((item, index) => {
        return item.categorie
    });
    const setFiltered = new Set(categoriesFiltered);
    const arrFiltered = [...setFiltered];

    function createArrOfCategories() {
        let allCategories = []
        categoriesFiltered.filter((item) => {
            allCategories.push(item.categorie)
            return item.categorie
        })
        const setUnico = new Set(allCategories);
        const devoltaArray = [...setUnico];

        setCategories(devoltaArray)
    }

    function removeAcento(text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
        return text;
    }

    function getSearched(e) {
        let text = removeAcento(e)
        let arr = []
        activitiesData.filter((item) => {
            let dataItem = removeAcento(item.title)
            if (dataItem.includes(text)) {
                arr.push(item)
            }
        })
        setArrSearch(arr)
    }

    useEffect(() => {
        getSearched(input)
    }, [input])

    function handleModal() {
        setModalVisible(!modalVisible)

        createArrOfCategories()
    }

    function handleFilter(e) {
        setDisplayPrimary('none')
        setDisplaySecondary('flex')
        setIsSelected(true)
        setFilter(e)

        console.log(e)

        let arrFilter = activitiesData.filter((item) => {
            if (item.categorie == e) {
                return item
            }
        })
        setCategorieFiltered(arrFilter)
    }

    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>

                <HeroContainer>
                    <TextSubTitle
                        text={language.activities.title}
                        color={theme.colors.darkGreen}
                    />
                    <FIlterButton
                        onPress={handleModal}
                    >
                        <Ionicons name="filter" size={26} color={theme.colors.darkGreen} />
                    </FIlterButton>
                </HeroContainer>
                <ContainerSearch
                    style={{
                        elevation: 5
                    }}
                >
                    <Input
                        placeholder={language.activities.search}
                        value={input}
                        onChangeText={(e) => setInput(e)}
                    />
                    <SearchButton>
                        <AntDesign name="search1" size={21} color={'rgba(44, 44, 44, 0.38)'} />
                    </SearchButton>
                </ContainerSearch>
            </Header>
            {
                input === '' &&
                <Main
                    style={{ display: displayPrimary }}
                >
                    <MainList
                        data={activitiesData}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Card
                                id={item.id}
                                image={item.content.image}
                                title={item.title}
                            />
                        )}
                    />
                </Main>
            }

            {
                (input !== '') &&
                <Main>
                    <SearchList
                        data={arrSearch}
                        renderItem={({ item }) => (
                            <Card
                                id={item.id}
                                title={item.title}
                                image={item.content.image}
                            />
                        )}
                    />
                </Main>
            }
            {
                filter !== '' &&
                <Main
                    style={{ display: displaySecondary }}
                >
                    <SearchList
                        data={categorieFiltered}
                        renderItem={({ item }) => (
                            <Card
                                id={item.id}
                                title={item.title}
                                image={item.content.image}
                            />
                        )}
                    />
                </Main>
            }
            <Modal
                animationType='fade'
                visible={modalVisible}
                transparent
            >
                <ModalContiner>
                    <FilterContainer>
                        <FilterHeader>
                            <TextSubTitle
                                text={language.activities.filter.title}
                            />
                            <CloseModalButton
                                onPress={handleModal}
                            >
                                <TextRegular
                                    text={language.activities.filter.button}
                                    color={theme.colors.light}
                                />
                            </CloseModalButton>
                        </FilterHeader>
                        <Details>
                            <TextRegular
                                text={language.activities.filter.text}
                            />
                        </Details>
                        <Line />
                        <Scroll>
                            <FilterOptions>
                                <FilterButton
                                    onPress={() => {
                                        setDisplayPrimary('flex')
                                        setDisplaySecondary('none')
                                        setFilter('')
                                    }}
                                    isSelected={filter == '' ? true : false}
                                >
                                    <TextRegular
                                        text='Todos'
                                        color={filter === '' ? theme.colors.light : theme.colors.black}
                                    />
                                </FilterButton>
                                {
                                    categories.map((item) => (
                                        <FilterButton
                                            onPress={() => handleFilter(item)}
                                            isSelected={isSelected && (item == filter) ? true : false}
                                        >
                                            <TextRegular
                                                text={item}
                                                color={isSelected && (item == filter) ? theme.colors.light : false}
                                            />
                                        </FilterButton>
                                    ))
                                }
                            </FilterOptions>
                        </Scroll>
                    </FilterContainer>
                </ModalContiner>
            </Modal>

        </Container >
    )
}

export default Activities