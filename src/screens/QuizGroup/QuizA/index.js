import {
    Container,
    Header,
    Main,
    TextContainer,
    Button,
    ButtonsContainer,
} from './styles';

import SelectButton from '../../../components/_Screens/Quiz/SelectButton';
import { TextRegular, TextThin } from '../../../components/Texts'
import SpaceText from '../../../components/_Screens/Quiz/SpaceText';

import { Entypo } from '@expo/vector-icons';
import Lottie from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

import theme from '../../../global/styles/theme'
import boating from '../../../../assets/animations/boating.json'


import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { QuizContext } from '../../../contexts/QuizContext';

const QuizA = () => {

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
                backgroundColor='#76CFE5'
                style='auto'
            />
            <Header>
                <Lottie
                    autoPlay
                    loop
                    source={boating}
                    style={{
                        width: '100%'
                    }}
                />
            </Header>
            <Main>

                <TextContainer>
                    <SpaceText>
                        <TextThin
                            text='Questão 1 de 3'
                        />
                    </SpaceText>
                    <TextRegular
                        text='Qual das atividades abaixo você tem mais interesse ?'
                    />
                </TextContainer>

                <ButtonsContainer>
                    <SelectButton
                        text="Caiaque"
                        onPress={() => handleSelected(30)}
                        changeColor={changeColorA}
                    />
                    <SelectButton
                        text="Passeio de barco"
                        onPress={() => handleSelected(20)}
                        changeColor={changeColorB}
                    />
                    <SelectButton
                        text="Passeio na praça"
                        onPress={() => handleSelected(10)}
                        changeColor={changeColorC}
                    />
                </ButtonsContainer>
                <Button
                    style={{
                        elevation: 2
                    }}
                    onPress={() => {
                        setQuizCount(quizCount + temp)
                        navigation.navigate('QuizB')
                    }}
                >
                    <Entypo name="chevron-right" size={24} color={theme.colors.green} />
                </Button>
            </Main>

        </Container>
    )
}

export default QuizA