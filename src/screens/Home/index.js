import { useContext, useEffect, useState } from 'react'
import {
    Alert,
    BackHandler,
} from 'react-native'

import {
    CarrousselContainer,
    Container,
    Greetings,
    Header,
    Main
} from './styles'

import UserButton from '../../components/UserButton'
import UserButtonContainer from '../../components/UserButtonContiner'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/_Screens/Home/Card'
import Carroussel from '../../components/_Screens/Home/Casrroussel'

import { StatusBar } from 'expo-status-bar'

import { useNavigation } from '@react-navigation/native'
import theme from '../../global/styles/theme'
import { AuthContext } from '../../contexts/auth'

import data from '../../../data'



const Home = () => {

    const { isFirstTime, setIsFirstTime } = useContext(AuthContext)
    const navigation = useNavigation()

    const backAction = () => {
        Alert.alert("Oops", "Você tem certeza de que deseja sair do aplicativo?", [
            {
                text: "Não",
                onPress: () => null,
                style: "cancel"
            },
            { text: "Sim", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };

    // useEffect(() => {
    //     BackHandler.addEventListener("hardwareBackPress", backAction);
    //     return () =>
    //         BackHandler.removeEventListener("hardwareBackPress", backAction);
    // }, []);


    let roadData = data.filter((item) => {
        return item.type == 'road'
    })

    let inCityData = data.filter((item) => {
        return item.type == 'inCity'
    })

    let anavilhanasData = data.filter((item) => {
        return item.type == 'anavilhanas'
    })

    let jauData = data.filter((item) => {
        return item.type == 'jau'
    })

    let riverData = data.filter((item) => {
        return item.type == 'river'
    })

    let toEatData = data.filter((item) => {
        return item.type == 'toEat'
    })

    let hotelsData = data.filter((item) => {
        return item.type == 'hotels'
    })

    function NavigateToItemSelected(data) {
        console.log('++++++++++++++++')
        console.log(data)
        navigation.navigate('ItemSelected', {
            itemId: data,
        });
    }

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
                <SearchBar />
            </Header>
            <Main>
                <CarrousselContainer
                    showsVerticalScrollIndicator={false}
                >
                    <Carroussel
                        title="O que visitar ?"
                    >
                        <Card
                            title={jauData[2].title}
                            image={jauData[2].content.image}
                            onPress={() => NavigateToItemSelected(jauData[2].id)}
                        />
                        <Card
                            title={toEatData[2].title}
                            image={toEatData[2].content.image}
                            onPress={() => NavigateToItemSelected(toEatData[2].id)}
                        />
                        <Card
                            title={anavilhanasData[2].title}
                            image={anavilhanasData[2].content.image}
                            onPress={() => NavigateToItemSelected(anavilhanasData[2].id)}
                        />
                    </Carroussel>

                    <Carroussel
                        title="Atrações dentro da cidade"
                    >
                        <Card
                            title={inCityData[0].title}
                            image={inCityData[0].content.image}
                            onPress={() => NavigateToItemSelected(inCityData[0].id)}
                        />
                        <Card
                            title={inCityData[1].title}
                            image={inCityData[1].content.image}
                            onPress={() => NavigateToItemSelected(inCityData[1].id)}
                        />

                        <Card
                            title={inCityData[2].title}
                            image={inCityData[2].content.image}
                            onPress={() => NavigateToItemSelected(inCityData[2].id)}
                        />
                    </Carroussel>

                    <Carroussel
                        title="Pelo Parna Anavilhanas"
                    >
                        <Card
                            title={anavilhanasData[0].title}
                            image={anavilhanasData[0].content.image}
                            onPress={() => NavigateToItemSelected(anavilhanasData[0].id)}
                        />
                        <Card
                            title={anavilhanasData[1].title}
                            image={anavilhanasData[1].content.image}
                            onPress={() => NavigateToItemSelected(anavilhanasData[1].id)}
                        />
                        <Card
                            title={anavilhanasData[2].title}

                            image={anavilhanasData[2].content.image}
                            onPress={() => NavigateToItemSelected(anavilhanasData[2].id)}
                        />
                    </Carroussel>
                    <Carroussel
                        title="Pelo Parna Jaú"
                    >
                        <Card
                            title={jauData[0].title}
                            image={jauData[0].content.image}
                            onPress={() => NavigateToItemSelected(jauData[0].id)}
                        />
                        <Card
                            title={jauData[1].title}
                            image={jauData[1].content.image}
                            onPress={() => NavigateToItemSelected(jauData[1].id)}
                        />
                        <Card
                            title={jauData[2].title}
                            image={jauData[2].content.image}
                            onPress={() => NavigateToItemSelected(jauData[2].id)}
                        />
                    </Carroussel>
                    <Carroussel
                        title="Onde Comer"
                    >
                        <Card
                            title={toEatData[0].title}
                            image={toEatData[0].content.image}
                            onPress={() => NavigateToItemSelected(toEatData[0].id)}
                        />
                        <Card
                            title={toEatData[1].title}
                            image={toEatData[1].content.image}
                            onPress={() => NavigateToItemSelected(toEatData[1].id)}
                        />
                        <Card
                            title={toEatData[2].title}
                            image={toEatData[2].content.image}
                            onPress={() => NavigateToItemSelected(toEatData[2].id)}
                        />
                    </Carroussel>
                    <Carroussel
                        title="Meios de hospedagem"
                    >
                        <Card
                            title={hotelsData[0].title}
                            image={hotelsData[0].content.image}
                            onPress={() => NavigateToItemSelected(hotelsData[0].id)}
                        />
                        <Card
                            title={hotelsData[1].title}
                            image={hotelsData[1].content.image}
                            onPress={() => NavigateToItemSelected(hotelsData[1].id)}
                        />
                        <Card
                            title={hotelsData[2].title}
                            image={hotelsData[2].content.image}
                            onPress={() => NavigateToItemSelected(hotelsData[2].id)}
                        />
                    </Carroussel>
                </CarrousselContainer>
            </Main>
        </Container>
    )
}

export default Home