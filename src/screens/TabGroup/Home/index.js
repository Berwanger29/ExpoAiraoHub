import {
    CarrousselContainer,
    Container,
    Greetings,
    Header,
    Main,
} from './styles'

import { StatusBar } from 'expo-status-bar'

import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'
import SearchBar from '../../../components/SearchBar'
import Carroussel from '../../../components/_Screens/Home/Carrousel'

import theme from '../../../global/styles/theme'

import data from '../../../../data'



const Home = () => {

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
                    />

                    <Carroussel
                        title="Atrações dentro da cidade"
                        data={inCityData}
                    />

                    <Carroussel
                        title="Pelo Parna Anavilhanas"
                        data={anavilhanasData}
                    />
                    <Carroussel
                        title="Pelo Parna Jaú"
                        data={jauData}
                    />
                    <Carroussel
                        title="Gastronomia"
                        data={toEatData}
                    />
                    <Carroussel
                        title="Meios de hospedagem"
                        data={hotelsData}
                    />
                </CarrousselContainer>
            </Main>
        </Container>
    )
}

export default Home