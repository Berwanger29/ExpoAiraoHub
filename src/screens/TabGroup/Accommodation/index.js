import { useState, useEffect } from 'react'
import {
    Container,
    Header,
    List,
    Main,
    SearchConatainer,
    Input,
    SearchButton,
} from './styles'

import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'
import Card from '../../../components/_Screens/Accommodation/Card'
import CardExternalPlatform from '../../../components/_Screens/Accommodation/CardExternalPlatform'
import HeroContainer from '../../../components/HeroContainer'

import { AntDesign } from '@expo/vector-icons';
import { TextSubTitle } from '../../../components/Texts'

import theme from '../../../global/styles/theme'
import data from '../../../../data'

import { useNavigation } from '@react-navigation/native'
import { useContext } from "react";
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import LanguageSelector from "../../../utils/LanguageSelector"
import { NotFound } from '../../../components/NotFound'

const Accommodation = () => {

    const { portuguese, english, language } = useContext(LanguageSelector);


    const navigation = useNavigation()
    const insets = useSafeAreaInsets()

    const [input, setInput] = useState('')
    const [wasFound, setWasFound] = useState(true)
    const [arrSearch, setArrSearch] = useState([])
    const [hotelsData, setHotelsData] = useState([])

    const accommodationData = data.filter((item) => {
        return item.type == 'hotels'
    })

    function navigateToSelected(id) {
        navigation.navigate('ItemSelected', {
            itemId: id
        })
    }

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
        accommodationData.filter((item) => {
            let dataItem = removeAcento(item.title)
            if (dataItem.includes(text)) {
                arr.push(item)
            }
        })
        setArrSearch(arr)
        if (arr.toString() === arrBoolean.toString()) {
            setWasFound(false)
        }
    }

    useEffect(() => {
        getSearched(input)
    }, [input])

    useEffect(() => {
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i];
                array[i] = array[j]
                array[j] = temp
            }
            setHotelsData(array)
        }
        shuffle(accommodationData)
    }, [])

    return (
        <Container
            style={{
                paddingTop: insets.top
            }}
        >
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <HeroContainer>
                    <TextSubTitle
                        text={language.accomodation.title}
                        color={theme.colors.darkGreen}
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
                        placeholder={language.accomodation.search}
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

            {input === '' ?
                (
                    <Main>
                        <CardExternalPlatform />
                        <List
                            showsVerticalScrollIndicator={false}
                            data={hotelsData}
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
                        >
                        </List>
                    </Main>
                )
                :
                (
                    <Main>
                        {
                            wasFound ?
                                (
                                    <List
                                        showsVerticalScrollIndicator={false}
                                        data={arrSearch}
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

            {/* {input === '' &&
                <Main
                    style={{
                        backgroundColor: 'blue'
                    }}
                >
                    <CardExternalPlatform />
                    <List
                        showsVerticalScrollIndicator={false}
                        data={hotelsData}
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
                    >
                    </List>
                </Main>
            } */}

            {/* {
                (input !== '') && (hasFound === true) ?
                    (
                        <Main>
                            <List
                                showsVerticalScrollIndicator={false}
                                data={arrSearch}
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
                    )
                    :
                    (
                        <NotFound />
                    )
            } */}
        </Container>

    )
}

export default Accommodation