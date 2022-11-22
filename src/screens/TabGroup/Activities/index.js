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
} from './styles'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TextRegular, TextSubTitle } from '../../../components/Texts'
import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'
import Card from '../../../components/_Screens/Activities/Card';
import HeroContainer from '../../../components/HeroContainer';
import { EvilIcons } from '@expo/vector-icons';
import Line from '../../../components/Line'

import ActivitiesAdventure from '../ActivitiesAdventure'
import ActivitiesTour from '../ActivitiesTour';

import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import data from '../../../../data';
import theme from '../../../global/styles/theme';

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

    const [input, setInput] = useState('')
    const [arrSearch, setArrSearch] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    const [filter, setFilter] = useState('')
    const [isSelected, setIsSelected] = useState(false)
    const [categorieFiltered, setCategorieFiltered] = useState([])
    const [displayPrimary, setDisplayPrimary] = useState('flex')
    const [displaySecondary, setDisplaySecondary] = useState('none')


    let activitiesData = data.filter((item) => {
        return item.type == 'tourism'
    })

    let categories = data.filter((item) => {
        if (item.type == 'tourism') {
        }

    })

    let categoriesFiltered = categories.filter((item, index) => {
        console.log('-----------------')
        console.log(categories.indexOf(item))
        console.log(index)
        console.log(categories.indexOf(item) === index)
        if (categories.indexOf(item) === index) {
            console.log(item.categorie)
            return item.categorie
        }
    }
    );



    function handleInput(e) {
        setInput(e)
        let arr = []
        activitiesData.filter((item) => {
            if (item.title.includes(e)) {
                arr.push(item)
            }
        })
        setArrSearch(arr)
    }

    function handleModal() {
        setModalVisible(!modalVisible)
    }

    function handleFilter(e) {
        setDisplayPrimary('none')
        setDisplaySecondary('flex')
        setIsSelected(true)
        setFilter(e)

        let arrFilter = activitiesData.filter((item) => {
            if (item.categorie == e) {
                return item
            }
        })

        if (e) {

        }
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
                        text="O que fazer"
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
                        placeholder="Procure uma atividade"
                        value={input}
                        onChangeText={(e) => handleInput(e)}
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
                                text='Filtro'
                            />
                            <CloseModalButton
                                onPress={handleModal}
                            >
                                <TextRegular
                                    text='filtrar'
                                    color={theme.colors.light}
                                />
                            </CloseModalButton>
                        </FilterHeader>
                        <Details>
                            <TextRegular
                                text='Escolha abaixo uma das opções de filtro '
                            />
                        </Details>
                        <Line />
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

                                categoriesFiltered.map((item) => (
                                    <FilterButton
                                        onPress={() => handleFilter(item.categorie)}
                                        isSelected={isSelected && (item.categorie == filter) ? true : false}
                                    >
                                        <TextRegular
                                            text={item.categorie}
                                            color={isSelected && (item.categorie == filter) ? theme.colors.light : false}
                                        />
                                    </FilterButton>
                                ))
                            }
                        </FilterOptions>
                    </FilterContainer>
                </ModalContiner>
            </Modal>

        </Container>
    )
}

export default Activities