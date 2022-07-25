import { useEffect } from 'react'

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

import data from '../../../data'

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
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                    (
                        <Card
                            title={item.title}
                            value={item.content.prices[3]}
                            image={item.content.image}
                        />
                    )
                    }
                >


                </List>
            </Main>
        </Container>
    )
}

export default Accommodation