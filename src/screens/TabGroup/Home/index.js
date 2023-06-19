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


import HomeSearchCard from '../../../components/_Screens/Home/HomeSearchCard';
import { TextTitle } from '../../../components/Texts';
import HeroContainer from '../../../components/HeroContainer';


import { useContext } from "react";
import LanguageSelector from "../../../utils/LanguageSelector"
import * as ptData from '../../../utils/pt';
import * as enData from '../../../utils/en';
import { NotFound } from '../../../components/NotFound';


const Home = () => {

    const { portuguese, english, language } = useContext(LanguageSelector);

    const [input, setInput] = useState('')
    const [arrSearch, setArrSearch] = useState([])
    const [wasFound, setWasFound] = useState(true)
    const [languageData, setLanguageData] = useState(ptData.default)

    useEffect(() => {
        if (language == portuguese) {
            setLanguageData(ptData.default)
        } else if (language == english) {
            setLanguageData(enData.default)
        }
    }, [language])


    // let inCityData = data.filter((item) => {
    //     return item.type == 'inCity'
    // })

    // let attractions = data.filter((item) => {
    //     return item.type == 'attractions'
    // })

    let craftsmanship = languageData.filter((item) => {
        return item.type == 'craftsmanship'
    })

    // let anavilhanasData = data.filter((item) => {
    //     return item.type == 'anavilhanas'
    // })

    // let jauData = data.filter((item) => {
    //     return item.type == 'jau'
    // })

    let agenciesData = languageData.filter((item) => {
        return item.type == 'agencies'
    })

    let toEatData = languageData.filter((item) => {
        return item.type == 'toEat'
    })

    // let bathhouse = data.filter((item) => {
    //     return item.type == 'bathhouse'
    // })

    let hotelsData = languageData.filter((item) => {
        return item.type == 'hotels'
    })

    function removeAcento(text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
        return text;
    }

    function getSearched(e) {
        let text = removeAcento(e)
        let arr = []
        let arrBoolean = []
        languageData.filter((item) => {
            let dataItem = removeAcento(item.title)
            if (dataItem.includes(text)) {
                arr.push(item)
            }
        })
        if (arr.toString() === arrBoolean.toString()) {
            console.log(arr)
            setWasFound(false)
        }
        setArrSearch(arr)
    }

    useEffect(() => {
        getSearched(input)
    }, [input])


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
                <HeroContainer>
                    <TextTitle
                        text={language.home.header}
                    />
                </HeroContainer>
                <SearchConatainer
                    style={{
                        elevation: 5,
                        shadowColor: '#171717',
                        shadowOffset: { width: -2, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                    }}
                >
                    <Input
                        placeholder={language.home.search}
                        value={input}
                        onChangeText={(e) => setInput(e)}
                    />
                    <SearchButton
                        activeOpacity={0.6}
                    >
                        <AntDesign name="search1" size={21} color={'rgba(44, 44, 44, 0.38)'} />
                    </SearchButton>
                </SearchConatainer>
            </Header>

            {
                input === '' ?
                    (
                        <Main>
                            <CarrousselContainer
                                showsVerticalScrollIndicator={false}
                            >
                                <Carroussel
                                    title={language.home.artesanato}
                                    data={craftsmanship}
                                />

                                <Carroussel
                                    title={language.home.agencia}
                                    data={agenciesData}
                                />

                                <Carroussel
                                    title={language.home.gastronomia}
                                    data={toEatData}
                                />

                                <Carroussel
                                    title={language.home.hospedagem}
                                    data={hotelsData}
                                />
                            </CarrousselContainer>
                        </Main>
                    )
                    :
                    (
                        <Main>
                            {input !== '' && true ?
                                (
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
                                )
                                :
                                (
                                    <NotFound
                                        label={language.notFound.text}
                                    />
                                )
                            }
                        </Main>
                    )
            }
        </Container >
    )
}

export default Home