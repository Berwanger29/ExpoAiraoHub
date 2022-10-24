import { useState, useContext } from 'react';
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

const QuizB = () => {

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
                {/* <AnimationContainer> */}
                <Lottie
                    autoPlay
                    loop
                    source={drink}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
                {/* </AnimationContainer> */}
                <ButtonBackContainer>
                    <BackButton />
                </ButtonBackContainer>
            </Header>
            <Main>
                <TextContainer>
                    <SpaceText>
                        <TextThin
                            text='Questão 2 de 3'
                        />
                    </SpaceText>
                    <TextRegular
                        text='Em um dia de sol, o que você prefere ?'
                    />
                </TextContainer>

                <ButtonsContainer>
                    <SelectButton
                        text="Açaí gelado"
                        onPress={() => handleSelected(30)}
                        changeColor={changeColorA}
                    />
                    <SelectButton
                        text="Limonada"
                        onPress={() => handleSelected(20)}
                        changeColor={changeColorB}
                    />
                    <SelectButton
                        text="Sorvete"
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