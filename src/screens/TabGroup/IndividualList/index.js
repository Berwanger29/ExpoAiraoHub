import { useEffect, useState } from 'react'
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
import { ActivityIndicator } from 'react-native'
import CardExternalPlatform from '../../../components/_Screens/Accommodation/CardExternalPlatform'
import { SafeContainer } from '../../../components/SafeContainer'


const IndividualList = ({ route }) => {

    const { title, data } = route.params
    const navigation = useNavigation()

    const [searchInput, setSearchInput] = useState('')
    const [arrSearch, setArrSearch] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)


    function handleInput(e) {
        setSearchInput(e)
        let arr = []
        data.sort().filter((item) => {
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

    useEffect(() => {
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i];
                array[i] = array[j]
                array[j] = temp
            }
        }
        shuffle(data)
        setDataLoaded(true)
    }, [])

    if (!dataLoaded) {
        <ActivityIndicator
            size='large'
            color={theme.colors.green}
        />
    }

    return (
        <SafeContainer>
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
                            elevation: 5,
                            shadowColor: '#171717',
                            shadowOffset: { width: -2, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
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
                        {title === 'Hospedagem' &&
                            <CardExternalPlatform />
                        }
                        <List
                            data={data}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            removeCLippedSubviews={true}
                            maxToRenderPerBatch={6}
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
                        {
                            dataLoaded ?
                                (
                                    <List
                                        data={arrSearch}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={item => item.id}
                                        renderItem={({ item }) =>
                                        (
                                            <Card
                                                title={item.title}
                                                image={item.content.image}
                                                onPress={() => navigateToSelected(item.id)}
                                            />
                                        )}
                                    />
                                )
                                :
                                (

                                    dataLoaded &&
                                    <ActivityIndicator
                                        size='large'
                                        color={theme.colors.green}
                                    />

                                )
                        }

                    </Main>
                }


            </Container>
        </SafeContainer>
    )
}

export default IndividualList