import { useState, useContext, useEffect } from 'react';
import {
    Container,
    Header,
    Main,
    TextContainer,
    Button,
    ButtonsContainer,
    ButtonBackContainer,
    AnimationContainer
} from './styles';

import SelectButton from '../../../components/_Screens/Quiz/SelectButton';
import BackButton from '../../../components/BackButton';

import { Entypo } from '@expo/vector-icons';
import Lottie from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

import theme from '../../../global/styles/theme'
import drink from '../../../../assets/animations/drink.json'

import { useNavigation } from '@react-navigation/native';
import { QuizContext } from '../../../contexts/QuizContext';
import SpaceText from '../../../components/_Screens/Quiz/SpaceText';
import { TextRegular, TextThin } from '../../../components/Texts';

import * as pt from '../../../utils/pt'
import * as en from '../../../utils/en'



const QuizB = () => {
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



    const navigation = useNavigation()
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
                style='auto'
            />
            <Header>
                <Lottie
                    autoPlay
                    loop
                    source={drink}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
                <ButtonBackContainer>
                    <BackButton />
                </ButtonBackContainer>
            </Header>
            <Main>
                <TextContainer>
                    <SpaceText>
                        <TextThin
                            text={language.quiz.B.count}
                        />
                    </SpaceText>
                    <TextRegular
                        text={language.quiz.B.text}
                    />
                </TextContainer>

                <ButtonsContainer>
                    <SelectButton
                        text={language.quiz.B.q1}
                        onPress={() => handleSelected(30)}
                        changeColor={changeColorA}
                    />
                    <SelectButton
                        text={language.quiz.B.q2}
                        onPress={() => handleSelected(20)}
                        changeColor={changeColorB}
                    />
                    <SelectButton
                        text={language.quiz.B.q3}
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
                    setQuizCount(quizCount + temp)
                    navigation.navigate('QuizC')
                }}
            >
                <Entypo name="chevron-right" size={24} color={theme.colors.green} />
            </Button>
        </Container>
    )
}

export default QuizB