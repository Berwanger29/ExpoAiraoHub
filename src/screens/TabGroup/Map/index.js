import { useState, useEffect } from "react"
import {
    ButtonsContainer,
    Container,
    Header,
    Main,
} from "./styles"

import UserButton from "../../../components/UserButton"
import UserButtonContainer from "../../../components/UserButtonContiner"
import Buttons from "../../../components/_Screens/Map/Buttons"
import { TextSubTitle } from "../../../components/Texts"

import {
    MaterialCommunityIcons,
    Ionicons
} from '@expo/vector-icons';


import { RFValue } from "react-native-responsive-fontsize";
import theme from '../../../global/styles/theme'


import _Car from "../../../components/_Screens/Map/_Car"
import _Taxi from "../../../components/_Screens/Map/_Taxi"
import _Bus from "../../../components/_Screens/Map/_Bus"
import _Airplane from "../../../components/_Screens/Map/_Airplane"
import _Boat from "../../../components/_Screens/Map/_Boat"

import * as pt from '../../../utils/pt'
import * as en from '../../../utils/en'



const Map = () => {

    const portuguese = pt.labels
    const english = en.labels
    const [selectedLanguage, setSelectedLanguage] = useState('pt')
    const [language, setLanguage] = useState(portuguese)

    function handleLanguage() {
        if (selectedLanguage === 'pt') {
            setLanguage(portuguese)
        } else if (selectedLanguage === 'en') {
            setLanguage(english)
        }
    }
    useEffect(() => {
        handleLanguage()
    }, [])

    const [isFocused, setIsFocused] = useState(true)
    const [name, setName] = useState('carro')

    function handleFocuesd(param) {
        setName(param)
    }

    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
                <TextSubTitle
                    text={language.map.title}
                    color={theme.colors.darkGreen}
                />
            </Header>


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
                {/* <Buttons
                    onPress={() => handleFocuesd('aviao')}
                >
                    <MaterialCommunityIcons
                        name="airplane"
                        size={RFValue(28)}
                        color={isFocused && name === 'aviao' ? theme.colors.light : theme.colors.semiLight}
                    />
                </Buttons> */}
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
                {isFocused && (name === 'carro') &&
                    <_Car />
                }
                {isFocused && (name === 'taxi') &&
                    <_Taxi />
                }
                {isFocused && (name === 'onibus') &&
                    <_Bus />
                }
                {isFocused && (name === 'aviao') &&
                    <_Airplane />
                }
                {isFocused && (name === 'barco') &&
                    <_Boat />
                }
            </Main>
        </Container>
    )
}

export default Map