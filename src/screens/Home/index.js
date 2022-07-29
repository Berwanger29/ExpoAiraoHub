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
import AsyncStorage from '@react-native-async-storage/async-storage'

import theme from '../../global/styles/theme'

import { AuthContext } from '../../contexts/auth'



const Home = () => {

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

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);


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
                            title='Restaurante Flor do Luar'
                            image={'https://images.unsplash.com/photo-1527679124583-9208be990bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'}
                        />
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                    </Carroussel>

                    <Carroussel
                        title="Atrações dentro da cidade"
                    >
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                    </Carroussel>

                    <Carroussel
                        title="Pelo Parna Anavilhanas"
                    >
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                    </Carroussel>
                    <Carroussel
                        title="Pelo Parna Jaú"
                    >
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                    </Carroussel>
                    <Carroussel
                        title="Onde Comer"
                    >
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                    </Carroussel>
                    <Carroussel
                        title="Meios de hospedagem"
                    >
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                        <Card title='Restaurante Flor do Luar' />
                    </Carroussel>
                </CarrousselContainer>
            </Main>
        </Container>
    )
}

export default Home