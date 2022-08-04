import {
    Container,
    Header,
    Main
} from './styles'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SearchBar from '../../../components/SearchBar'
import Title from '../../../components/Title'
import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'


import ActivitiesAdventure from '../ActivitiesAdventure'
import ActivitiesTour from '../ActivitiesTour';




const TopTab = createMaterialTopTabNavigator()

function ActivitiesTopTabs() {
    return (
        <TopTab.Navigator
            initialRouteName='Aventura'
            screenOptions={{
                tabBarStyle: { backgroundColor: '#FAFAFA'},
                tabBarIndicatorStyle: { backgroundColor: 'green'}
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
    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <Title
                    text="Atividades"
                />
                <SearchBar />
            </Header>
            <Main>
                <ActivitiesTopTabs />
            </Main>
        </Container>
    )
}

export default Activities