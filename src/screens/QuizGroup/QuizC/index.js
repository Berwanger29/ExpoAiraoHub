import { useState, useContext } from 'react';
import {
    Container,
    Header,
    ButtonBackContainer,
    Main,
    TextContainer,
    Button,
    ButtonsContainer
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import BackButton from '../../../components/BackButton';
import SelectButton from '../../../components/_Screens/Quiz/SelectButton';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import Lottie from 'lottie-react-native';

import theme from '../../../global/styles/theme'
import duet from '../../../../assets/animations/duet.json'

import { RFPercentage } from 'react-native-responsive-fontsize';
import { StackActions, useNavigation } from '@react-navigation/native';
import { QuizContext } from '../../../contexts/QuizContext';
import SpaceText from '../../../components/_Screens/Quiz/SpaceText';
import { TextRegular, TextThin } from '../../../components/Texts';

const QuizC = () => {

    const navigation = useNavigation()

    async function storeData(value) {
        try {
            const jsonValue = JSON.stringify(value)
            setQuizCount(0)
            await AsyncStorage.setItem('@airaoHub_infoProfile', jsonValue)
        } catch (e) {
            console.log(e)
        }
    }

    const { quizCount, setQuizCount } = useContext(QuizContext)

    const isFocused = true
    const [changeColorA, setChangeColorA] = useState(false)
    const [changeColorB, setChangeColorB] = useState(false)
    const [changeColorC, setChangeColorC] = useState(false)

    const [temp, setTemp] = useState(0)


    function handleSelected(param) {
        if (isFocused && param == 30) {
            setChangeColorA(true)
            setChangeColorB(false)
            setChangeColorC(false)

            setTemp(param)
        }
        if (isFocused && param == 20) {
            setChangeColorB(true)
            setChangeColorA(false)
            setChangeColorC(false)

            setTemp(param)
        }
        if (isFocused && param == 10) {
            setChangeColorC(true)
            setChangeColorA(false)
            setChangeColorB(false)

            setTemp(param)
        }
    }

    return (
        <Container>
            <StatusBar
                backgroundColor='transparent'
                style='auto'
            />
            <Header>
                <ButtonBackContainer>
                    <BackButton />
                </ButtonBackContainer>
                <Lottie
                    autoPlay
                    loop
                    source={duet}
                    style={{
                        height: '100%',
                    }}
                />

            </Header>
            <Main>

                <TextContainer>
                    <SpaceText>
                        <TextThin
                            text='Questão 3 de 3'
                        />
                    </SpaceText>
                    <TextRegular
                        text='Última pergunta, qual estilo de música você prefere ?'
                    />
                </TextContainer>

                <ButtonsContainer>
                    <SelectButton
                        text="Rock"
                        onPress={() => handleSelected(30)}
                        changeColor={changeColorA}
                    />
                    <SelectButton
                        text="Nacionais"
                        onPress={() => handleSelected(20)}
                        changeColor={changeColorB}
                    />
                    <SelectButton
                        text="Silêncio"
                        onPress={() => handleSelected(10)}
                        changeColor={changeColorC}
                    />
                </ButtonsContainer>

            </Main>
            <Button
                style={{
                    elevation: 2
                }}
                onPress={() => {
                    storeData(quizCount + temp)
                    navigation.dispatch(
                        StackActions.replace('TabNavigator')
                    )
                }}
            >
                <Entypo name="chevron-right" size={24} color={theme.colors.green} />
            </Button>
        </Container>
    )
}

export default QuizC