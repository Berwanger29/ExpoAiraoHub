import {
    Container,
    Header,
    Main,
    Input,
    SearchButton,
    ContainerSearch,
    SearchList,
    MainList
} from './styles'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TextSubTitle } from '../../../components/Texts'
import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'
import Card from '../../../components/_Screens/Activities/Card';

import ActivitiesAdventure from '../ActivitiesAdventure'
import ActivitiesTour from '../ActivitiesTour';

import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
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

    let activitiesData = data.filter((item) => {
        return item.type == 'tourism'
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

    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <TextSubTitle
                    text="O que fazer"
                    color={theme.colors.darkGreen}
                />
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
        </Container>
    )
}

export default Activities