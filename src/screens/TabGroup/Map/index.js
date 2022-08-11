import { useState } from "react"
import {
    ButtonsContainer,
    Container,
    Header,
    Main,
    MapButton,
    MapLinkContainer,
} from "./styles"

import * as Linking from 'expo-linking'

import Title from '../../../components/Title'
import TitleMap from "../../../components/_Screens/Map/TitleMap"
import UserButton from "../../../components/UserButton"
import UserButtonContainer from "../../../components/UserButtonContiner"
import Buttons from "../../../components/_Screens/Map/Buttons"

import {
    Feather,
    MaterialCommunityIcons,
    Ionicons
} from '@expo/vector-icons';


import { RFValue } from "react-native-responsive-fontsize";
import theme from '../../../global/styles/theme'
import TextMap from "../../../components/_Screens/Map/TextMap"

const mapLink = 'https://goo.gl/maps/q1HGYamtj4RF1Fy8A'


const Map = () => {

    const [isFocused, setIsFocused] = useState(true)
    const [name, setName] = useState('carro')
    const [title, setTitle] = useState('Veículo pessoal')

    function handleFocuesd(param) {
        setName(param)
    }

    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
            </Header>
            <Title
                text="Como chegar"
            />
            <ButtonsContainer>
                <Buttons
                    onPress={() => handleFocuesd('carro')}
                >
                    <MaterialCommunityIcons
                        name="car-hatchback"
                        size={RFValue(28)}
                        color={isFocused && name === 'carro' ? theme.colors.light : theme.colors.semiLight}
                    />
                </Buttons>
                <Buttons
                    onPress={() => handleFocuesd('taxi')}
                >
                    <MaterialCommunityIcons
                        name="taxi"
                        size={RFValue(28)}
                        color={isFocused && name === 'taxi' ? theme.colors.light : theme.colors.semiLight}
                    />
                </Buttons>
                <Buttons
                    onPress={() => handleFocuesd('onibus')}
                >
                    <MaterialCommunityIcons
                        name="bus"
                        size={RFValue(28)}
                        color={isFocused && name === 'onibus' ? theme.colors.light : theme.colors.semiLight}
                    />
                </Buttons>
                <Buttons
                    onPress={() => handleFocuesd('aviao')}
                >
                    <MaterialCommunityIcons
                        name="airplane"
                        size={RFValue(28)}
                        color={isFocused && name === 'aviao' ? theme.colors.light : theme.colors.semiLight}
                    />
                </Buttons>
                <Buttons
                    onPress={() => handleFocuesd('barco')}
                >
                    <Ionicons
                        name="boat"
                        size={RFValue(26)}
                        color={isFocused && name === 'barco' ? theme.colors.light : theme.colors.semiLight}
                    />
                </Buttons>

            </ButtonsContainer>


            <Main
                showsVerticalScrollIndicator={false}
            >
                <TitleMap
                    title={title}
                />

                <TextMap
                    text={'Para chegar em Novo Airão é necessário pegar  rodovia AM-070, que passa pela ponte Phelippe Daou e após passar pelo banho do Miriti, entrar na primeira saída para a AM-352 e seguir até o final. A viagem tem uma duração média de duas horas e meia.'}
                />

                <MapLinkContainer>
                    <MapButton
                        onPress={() => {
                            Linking.openURL('https://goo.gl/maps/q1HGYamtj4RF1Fy8A')
                        }}
                    >
                        <Feather name="map" size={24} color="black" />
                    </MapButton>
                </MapLinkContainer>
            </Main>
        </Container>
    )
}

export default Map