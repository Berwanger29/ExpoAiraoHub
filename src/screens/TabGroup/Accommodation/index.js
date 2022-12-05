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

const Accommodation = () => {

    const navigation = useNavigation()

    const [hotel, setHotel] = useState('')
    const [input, setInput] = useState('')
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
        accommodationData.filter((item) => {
            let dataItem = removeAcento(item.title)
            if (dataItem.includes(text)) {
                arr.push(item)
            }
        })
        setArrSearch(arr)
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
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <HeroContainer>
                    <TextSubTitle
                        text='Hospedagem'
                        color={theme.colors.darkGreen}
                    />
                </HeroContainer>
                <SearchConatainer
                    style={{
                        elevation: 5
                    }}
                >
                    <Input
                        placeholder="Procure um local de hospedagem"
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
            {input == '' &&

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
            }

            {
                input !== '' &&
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
            }
        </Container>
    )
}

export default Accommodation