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
} from './styles'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TextRegular, TextSubTitle } from '../../../components/Texts'
import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'
import Card from '../../../components/_Screens/Activities/Card';
import HeroContainer from '../../../components/HeroContainer';
import { EvilIcons } from '@expo/vector-icons';
import Line from '../../../components/Line'
import FilterButton from '../../../components/_Screens/Activities/FilterButton';

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
    const [filterOption, setFilterOption] = useState(false)
    const [changeColor, setChangeColor] = useState(0)

    let activitiesData = data.filter((item) => {
        return item.type == 'tourism'
    })


    let dataCategories = data.filter((item) => {
        if (item.type == 'tourism') {
            return item.categorie
        }
    })




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

    function handleFilter(categorie, index) {

        setChangeColor(index)
        console.log('-------------')
        console.log(changeColor)
        console.log(index)

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
            {input === '' &&
                <Main>
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
                input !== '' &&
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
                                <EvilIcons name="close" size={30} color="black" />
                            </CloseModalButton>
                        </FilterHeader>
                        <Details>
                            <TextRegular
                                text='Escolha abaixo uma das opções de filtro '
                            />
                        </Details>
                        <Line />
                        <FilterOptions>
                            {
                                dataCategories.map((item, index) =>
                                    <FilterButton
                                        label={item.categorie}
                                        onPress={() => handleFilter(item.categorie, index)}
                                        index={index}
                                        changeColor={changeColor}
                                    />
                                )
                            }
                        </FilterOptions>
                    </FilterContainer>
                </ModalContiner>
            </Modal>

        </Container>
    )
}

export default Activities