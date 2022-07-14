

import {
    Container, Greetings, Header
} from './styles'

import { auth } from '../../../firebase'

import UserButton from '../../components/UserButton'
import UserButtonContainer from '../../components/UserButtonContiner'
import SearchBar from '../../components/SearchBar'

const Home = () => {


    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <Greetings>
                    Bem vindo, Caio
                </Greetings>
                <SearchBar />
            </Header>
        </Container>
    )
}

export default Home