import { useEffect, useState } from 'react'
import {
    Container,
    ContainerBackButton,
    Header,
    List,
    Input,
    Main,
    SearchButton,
    SearchConatainer,
} from './styles'


import Title from '../../../components/Title'
import BackButton from '../../../components/BackButton'
import Card from '../../../components/_Screens/Accommodation/Card'
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'


const IndividualList = ({ route }) => {

    const { title, data } = route.params
    const [searchInput, setSearchInput] = useState('')

    const navigation = useNavigation()
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
                <Title
                    text={title}
                />
                <SearchConatainer
                    style={{
                        elevation: 5
                    }}
                >
                    <Input
                        placeholder="Procure um local de hospedagem"
                        value={searchInput}
                        onChangeText={(e) => setSearchInput(e)}
                    />
                    <SearchButton
                        activeOpacity={0.6}
                    >
                        <AntDesign name="search1" size={21} color={'rgba(44, 44, 44, 0.38)'} />
                    </SearchButton>
                </SearchConatainer>
            </Header>
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
        </Container>
    )
}

export default IndividualList