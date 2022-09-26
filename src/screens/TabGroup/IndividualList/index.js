import { useState } from 'react'
import {
    Container,
    ContainerBackButton,
    Header,
    List,
    Input,
    Main,
    SearchButton,
    SearchContainer,
} from './styles'


import { TextTitle } from '../../../components/Texts'
import BackButton from '../../../components/BackButton'
import Card from '../../../components/_Screens/Accommodation/Card'
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'
import theme from '../../../global/styles/theme'


const IndividualList = ({ route }) => {

    const { title, data } = route.params
    const [searchInput, setSearchInput] = useState('')
    const [arrSearch, setArrSearch] = useState([])

    const navigation = useNavigation()


    function handleInput(e) {
        setSearchInput(e)
        let arr = []
        data.filter((item) => {
            if (item.title.includes(e)) {
                arr.push(item)
            }
        })
        setArrSearch(arr)
    }

    function navigateToSelected(id) {
        navigation.navigate('ItemSelected', {
            itemId: id
        })
    }


    return (
        <Container>
            <ContainerBackButton>
                <BackButton />
            </ContainerBackButton>
            <Header>
                <TextTitle
                    text={title}
                    color={theme.colors.darkGreen}
                />
                <SearchContainer
                    style={{
                        elevation: 5
                    }}
                >
                    <Input
                        placeholder="Dentro da cidade"
                        value={searchInput}
                        onChangeText={(e) => handleInput(e)}
                    />
                    <SearchButton
                        activeOpacity={0.6}
                    >
                        <AntDesign name="search1" size={21} color={'rgba(44, 44, 44, 0.38)'} />
                    </SearchButton>
                </SearchContainer>
            </Header>
            {searchInput == '' &&
                <Main>
                    <List
                        showsVerticalScrollIndicator={false}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                        (
                            <Card
                                title={item.title}
                                value={item.content.prices}
                                image={item.content.image}
                                type={item.content.type}
                                onPress={() => navigateToSelected(item.id)}
                            />
                        )
                        }
                    />
                </Main>
            }

            {
                searchInput !== '' &&
                <Main>
                    <List
                        showsVerticalScrollIndicator={false}
                        data={arrSearch}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                        (
                            <Card
                                title={item.title}
                                image={item.content.image}
                                onPress={() => navigateToSelected(item.id)}
                            />
                        )
                        }
                    />
                </Main>
            }
        </Container>
    )
}

export default IndividualList