import { useState } from 'react'
import {
    CarrousselContainer,
    Container,
    Greetings,
    Header,
    Main,
    SearchConatainer,
    Input,
    SearchButton,
    HomeList
} from './styles'

import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons';

import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'
import Carroussel from '../../../components/_Screens/Home/Carrousel'

import theme from '../../../global/styles/theme'
import data from '../../../../data'
import HomeSearchCard from '../../../components/_Screens/Home/HomeSearchCard';





const Home = () => {

    const [input, setInput] = useState('')
    const [arrSearch, setArrSearch] = useState([])

    function handleInput(e) {
        setInput(e)
        let arr = []
        data.filter((item) => {
            if (item.title.includes(e)) {
                arr.push(item)
            }
        })
        setArrSearch(arr)
    }

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
                <SearchConatainer
                    style={{
                        elevation: 5
                    }}
                >
                    <Input
                        placeholder="Digite alguma coisa"
                        value={input}
                        onChangeText={(e) => handleInput(e)}
                    />
                    <SearchButton
                        activeOpacity={0.6}
                    >
                        <AntDesign name="search1" size={21} color={'rgba(44, 44, 44, 0.38)'} />
                    </SearchButton>
                </SearchConatainer>
            </Header>

            {input === '' &&
                <Main>
                    <CarrousselContainer
                        showsVerticalScrollIndicator={false}
                    >
                        {/* <Carroussel
                            title="O que visitar ?"
                        /> */}

                        <Carroussel
                            title="Dentro da cidade"
                            data={inCityData}
                        />

                        <Carroussel
                            title="Pelo Anavilhanas"
                            data={anavilhanasData}
                        />
                        <Carroussel
                            title="Pelo Jaú"
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
            }

            {input !== '' &&
                <Main>
                    <CarrousselContainer>
                        <HomeList
                            data={arrSearch}
                            renderItem={({ item }) => (
                                <HomeSearchCard
                                    id={item.id}
                                    title={item.title}
                                    image={item.content.image}
                                />
                            )}
                        />
                    </CarrousselContainer>
                </Main>
            }
        </Container>
    )
}

export default Home