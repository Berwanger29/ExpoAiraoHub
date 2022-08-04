import {
    CarrousselContainer,
    Container,
    Greetings,
    Header,
    Main
} from './styles'

import { StatusBar } from 'expo-status-bar'

import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'
import SearchBar from '../../../components/SearchBar'
import Carroussel from '../../../components/_Screens/Home/Carrousel'


import { useNavigation } from '@react-navigation/native'
import theme from '../../../global/styles/theme'

import data from '../../../../data'



const Home = () => {
    const navigation = useNavigation()

    let inCityData = data.filter((item) => {
        return item.type == 'inCity'
    })

    let anavilhanasData = data.filter((item) => {
        return item.type == 'anavilhanas'
    })

    let jauData = data.filter((item) => {
        return item.type == 'jau'
    })

    let toEatData = data.filter((item) => {
        return item.type == 'toEat'
    })

    let hotelsData = data.filter((item) => {
        return item.type == 'hotels'
    })

    function NavigateToItemSelected(data) {
        navigation.navigate('ItemSelected', {
            itemId: data,
        });
    }

    return (
        <Container>
            <StatusBar
                backgroundColor={theme.colors.light}
            />
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <Greetings>
                    Olá
                </Greetings>
                <SearchBar />
            </Header>
            <Main>
                <CarrousselContainer
                    showsVerticalScrollIndicator={false}
                >
                    <Carroussel
                        title="O que visitar ?"
                    >
                    </Carroussel>

                    <Carroussel
                        title="Atrações dentro da cidade"
                    >

                    </Carroussel>

                    <Carroussel
                        title="Pelo Parna Anavilhanas"
                    >

                    </Carroussel>
                    <Carroussel
                        title="Pelo Parna Jaú"
                    >

                    </Carroussel>
                    <Carroussel
                        title="Onde Comer"
                    >

                    </Carroussel>
                    <Carroussel
                        title="Meios de hospedagem"
                    >

                    </Carroussel>
                </CarrousselContainer>
            </Main>
        </Container>
    )
}

export default Home