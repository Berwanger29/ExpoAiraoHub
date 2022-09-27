import { useState } from 'react'
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
import { AntDesign } from '@expo/vector-icons';


import { RFValue } from 'react-native-responsive-fontsize';
import data from '../../../../data'

import { useNavigation } from '@react-navigation/native'
import CardExternalPlatform from '../../../components/_Screens/Accommodation/CardExternalPlatform'
import { TextSubTitle } from '../../../components/Texts'
import theme from '../../../global/styles/theme'

const Accommodation = () => {

    const navigation = useNavigation()
    function navigateToSelected(id) {
        navigation.navigate('ItemSelected', {
            itemId: id
        })
    }

    const [hotel, setHotel] = useState('')
    const [input, setInput] = useState([])


    const accommodationData = data.filter((item) => {
        return item.type == 'hotels'
    })


    function handleInput(e) {
        setHotel(e)
        let arr = []
        accommodationData.filter((item) => {
            if (item.title.includes(e)) {
                arr.push(item)
            }
        })
        setInput(arr)
    }

    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>

                <TextSubTitle
                    text='Hospedagem'
                    color={theme.colors.darkGreen}
                />
                <SearchConatainer
                    style={{
                        elevation: 5
                    }}
                >
                    <Input
                        placeholder="Procure um local de hospedagem"
                        value={hotel}
                        onChangeText={(e) => handleInput(e)}
                    />
                    <SearchButton
                        activeOpacity={0.6}
                    >
                        <AntDesign name="search1" size={RFValue(21)} color={'rgba(44, 44, 44, 0.38)'} />
                    </SearchButton>
                </SearchConatainer>
            </Header>
            {hotel == '' &&

                <Main>
                    <CardExternalPlatform />
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
                hotel !== '' &&
                <Main>
                    <List
                        showsVerticalScrollIndicator={false}
                        data={input}
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