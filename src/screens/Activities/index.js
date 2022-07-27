import SearchBar from '../../components/SearchBar'
import Title from '../../components/Title'
import UserButton from '../../components/UserButton'
import UserButtonContainer from '../../components/UserButtonContiner'
import {
    Container,
    Header
} from './styles'

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
        </Container>
    )
}

export default Activities