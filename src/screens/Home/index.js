

import {
    CarrousselContainer,
    Container,
    Greetings,
    Header,
    Main
} from './styles'

import { auth } from '../../../firebase'

import UserButton from '../../components/UserButton'
import UserButtonContainer from '../../components/UserButtonContiner'
import SearchBar from '../../components/SearchBar'

import Card from '../../components/_Screens/Home/Card'
import Carroussel from '../../components/_Screens/Home/Casrroussel'

const Home = () => {


    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <Greetings>
                    Olá, Caio
                </Greetings>
                <SearchBar />
            </Header>
            <Main>
                <CarrousselContainer
                    showsVerticalScrollIndicator={false}
                >
                    <Carroussel
                        title="Onde ir"
                    >
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                    </Carroussel>

                    <Carroussel
                        title="Atividades"
                    >
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                    </Carroussel>

                    <Carroussel
                        title="Meios de hospedagem"
                    >
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                    </Carroussel>
                </CarrousselContainer>
            </Main>
        </Container>
    )
}

export default Home