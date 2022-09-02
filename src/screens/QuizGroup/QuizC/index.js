import { useState, useContext } from 'react';
import {
    Container,
    Header,
    ButtonBackContainer,
    Main,
    TextContainer,
    Button,
    LabelCountText,
    QuestionText,
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
            console.log(quizCount)
        }
        if (isFocused && param == 20) {
            setChangeColorB(true)
            setChangeColorA(false)
            setChangeColorC(false)

            setTemp(param)
            console.log(quizCount)
        }
        if (isFocused && param == 10) {
            setChangeColorC(true)
            setChangeColorA(false)
            setChangeColorB(false)

            setTemp(param)
            console.log(quizCount)
        }
    }

    return (
        <Container>
            <StatusBar
                backgroundColor='#76CFE5'
                style='auto'
            />
            <Header>

                <Lottie
                    autoPlay
                    loop
                    source={duet}
                    style={{
                        width: RFPercentage(50)
                    }}
                />
                <ButtonBackContainer>
                    <BackButton />
                </ButtonBackContainer>
            </Header>
            <Main>

                <TextContainer>
                    <LabelCountText>
                        Questão 3 de 3
                    </LabelCountText>
                    <QuestionText>
                        Última pergunta, qual estilo de música você prefere ?
                    </QuestionText>
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