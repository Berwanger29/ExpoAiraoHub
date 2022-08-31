import {
    Container,
    Header,
    Main,
    Input,
    SearchButton,
    ContainerSearch,
    SearchList
} from './styles'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Title from '../../../components/Title'
import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'
import Card from '../../../components/_Screens/Activities/Card';

import ActivitiesAdventure from '../ActivitiesAdventure'
import ActivitiesTour from '../ActivitiesTour';

import { AntDesign } from '@expo/vector-icons';
import {  useState } from 'react';
import data from '../../../../data';




const TopTab = createMaterialTopTabNavigator()

function ActivitiesTopTabs() {
    return (
        <TopTab.Navigator
            initialRouteName='Aventura'
            screenOptions={{
                tabBarStyle: { backgroundColor: '#FAFAFA' },
                tabBarIndicatorStyle: { backgroundColor: 'green' }
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
        return item.type == 'adventure' || item.type == 'tour'
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
                <Title
                    text="Atividades"
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
                    <ActivitiesTopTabs />
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
                                image={item.content.image}
                                title={item.title}
                                price={item.content.prices}
                                type={item.content.type}
                            />
                        )}
                    />
                </Main>
            }
        </Container>
    )
}

export default Activities