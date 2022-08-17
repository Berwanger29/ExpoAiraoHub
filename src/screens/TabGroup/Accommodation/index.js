import { useState } from 'react'
import {
    Container,
    Header,
    List,
    Main,
    SearchConatainer,
    Input,
    SearchButton,
    Text
} from './styles'

import UserButton from '../../../components/UserButton'
import UserButtonContainer from '../../../components/UserButtonContiner'
import Title from '../../../components/Title'
import Card from '../../../components/_Screens/Accommodation/Card'
import { AntDesign } from '@expo/vector-icons';


import { RFValue } from 'react-native-responsive-fontsize';
import data from '../../../../data'

import { useNavigation } from '@react-navigation/native'

const Accommodation = () => {

    const navigation = useNavigation()
    function navigateToSelected(id) {
        navigation.navigate('ItemSelected', {
            itemId: id
        })
    }

    const [ hotel, setHotel ] = useState('')


    const accommodationData = data.filter((item) => {
        return item.type == 'hotels'
    })


    function handleInput(e) {
        console.log(e)
        setHotel(e)
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
                <Text>
                    {hotel}
                </Text>
            }
        </Container>
    )
}

export default Accommodation