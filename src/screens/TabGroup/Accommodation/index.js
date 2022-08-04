import {
    Container,
    Header,
    List,
    Main
} from './styles'

import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'
import Title from '../../../components/Title'
import SearchBar from '../../../components/SearchBar'
import Card from '../../../components/_Screens/Accommodation/Card'

import data from '../../../../data'

import { useNavigation } from '@react-navigation/native'

const Accommodation = () => {

    const navigation = useNavigation()

    const accommodationData = data.filter((item) => {
        return item.type == 'hotels'
    })

    function navigateToSelected(id) {
        console.log('===================')
        console.log(id)

        
    }

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
                            onPress={() => navigateToSelected(item.id)}
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