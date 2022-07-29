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

    const accommodationData = data.filter((item) => {
        return item.type == 'hotels'
    })

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
                    data={accommodationData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                    (
                        <Card
                            title={item.title}
                            value={item.content.prices}
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