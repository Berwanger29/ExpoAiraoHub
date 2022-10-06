import { useEffect, useState } from 'react'
import {
    CarrousselContainer,
    Container,
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

import data from '../../../../data'
import HomeSearchCard from '../../../components/_Screens/Home/HomeSearchCard';
import { TextTitle } from '../../../components/Texts';





const Home = () => {

    const [input, setInput] = useState('')
    const [arrSearch, setArrSearch] = useState([])


    let inCityData = data.filter((item) => {
        return item.type == 'inCity'
    })

    let attractions = data.filter((item) => {
        return item.type == 'attractions'
    })

    let craftsmanship = data.filter((item) => {
        return item.type == 'craftsmanship'
    })

    let anavilhanasData = data.filter((item) => {
        return item.type == 'anavilhanas'
    })

    let jauData = data.filter((item) => {
        return item.type == 'jau'
    })

    let agenciesData = data.filter((item) => {
        return item.type == 'agencies'
    })

    let toEatData = data.filter((item) => {
        return item.type == 'toEat'
    })

    let bathhouse = data.filter((item) => {
        return item.type == 'bathhouse'
    })

    let hotelsData = data.filter((item) => {
        return item.type == 'hotels'
    })

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


    return (
        <Container>
            <StatusBar
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <TextTitle
                    text='Olá'
                />
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
                            title="Dentro da cidade"
                            data={inCityData}
                        /> */}

                        {/* <Carroussel
                            title="Artesanato"
                            data={craftsmanship}
                        /> */}

                        <Carroussel
                            title='Atrações'
                            data={attractions}
                        />

                        {/* <Carroussel
                            title="Pelo Anavilhanas"
                            data={anavilhanasData}
                        />
                        <Carroussel
                            title="Pelo Jaú"
                            data={jauData}
                        /> */}

                        <Carroussel
                            title="Pacotes e passeios"
                            data={agenciesData}
                        />

                        <Carroussel
                            title="Gastronomia"
                            data={toEatData}
                        />

                        <Carroussel
                            title="Balneário"
                            data={bathhouse}
                        />

                        <Carroussel
                            title="Hospedagem"
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