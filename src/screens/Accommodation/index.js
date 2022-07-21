
import {
    Container,
    Header,
    List,
    Main
} from './styles'

import UserButton from '../../components/UserButton'
import UserButtonContainer from '../../components/UserButtonContiner'
import Title from '../../components/Title'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/_Screens/Accommodation/Card'

const Accommodation = () => {
    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <Title
                    text="Hospedagem"
                />
                <SearchBar />
            </Header>
            <Main>
                <List
                    showsVerticalScrollIndicator={false}
                >
                    <Card
                        title='Mirante do Gavião'
                        isOpen={true}
                        value='1.370,00'
                    />
                    <Card
                        title='Pousada Bela Vista'
                        isOpen={false}
                        value='500,00'
                    />
                    <Card
                        title='Anavilhanas jungle lodge'
                        isOpen={true}
                        value='2.500,00'
                    />
                    <Card
                        title='Pousada Novo Airão'
                        isOpen={true}
                        value='220,00'
                    />

                </List>
            </Main>
        </Container>
    )
}

export default Accommodation