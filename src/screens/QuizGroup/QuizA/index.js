import {
    Container,
    Header,
    Main,
    TextContainer,
    Button,
    LabelCountText,
    QuestionText,
    ButtonsContainer
} from './styles';

import SelectButton from '../../../components/_Screens/Quiz/SelectButton';

import { Entypo } from '@expo/vector-icons';
import Lottie from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

import ContexProfile from '../../../global/ContextProfile';
import theme from '../../../global/styles/theme'
import boating from '../../../../assets/animations/boating.json'


import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';

const QuizA = () => {

    const navigation = useNavigation()
    // const [pointsProfile, setPointsProfile] = useContext(ContexProfile)

    const isFocused = true
    const [changeColorA, setChangeColorA] = useState(false)
    const [changeColorB, setChangeColorB] = useState(false)
    const [changeColorC, setChangeColorC] = useState(false)

    function handleSelected(param) {
        if (isFocused && param == 30) {
            setChangeColorA(true)
            setChangeColorB(false)
            setChangeColorC(false)
        }
        if (isFocused && param == 20) {
            setChangeColorB(true)
            setChangeColorA(false)
            setChangeColorC(false)
        }
        if (isFocused && param == 10) {
            setChangeColorC(true)
            setChangeColorA(false)
            setChangeColorB(false)
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
                    <LabelCountText>
                        Questão 1 de 3
                    </LabelCountText>
                    <QuestionText>
                        Qual das atividades abaixo você tem mais interesse ?
                    </QuestionText>
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
            </Main>
            <Button
                style={{
                    elevation: 2
                }}
                onPress={() => navigation.navigate('QuizB')}
            >
                <Entypo name="chevron-right" size={24} color={theme.colors.green} />
            </Button>
        </Container>
    )
}

export default QuizA