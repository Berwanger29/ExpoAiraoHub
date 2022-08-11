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

import theme from '../../../global/styles/theme'
import boating from '../../../../assets/animations/boating.json'

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const QuizA = () => {

    const navigation = useNavigation()

    const [isFocused, setIsFocused] = useState(false)
    const [changeColor, setChangeColor] = useState(false)

    function handleSelected(param) {
        console.log(param)
        if (isFocused && param == 'a') {
            setChangeColor(true)
        }
        if (isFocused && param == 'b') {
            setChangeColor(true)
        }
        if (isFocused && param == 'c') {
            setChangeColor(true)
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
                        onPress={() => handleSelected('a')}
                        changeColor={isFocused}
                    />
                    <SelectButton
                        text="Passeio de barco"
                        onPress={() => handleSelected('b')}
                        changeColor={isFocused}
                    />
                    <SelectButton
                        text="Passeio na praça"
                        onPress={() => handleSelected('c')}
                        changeColor={isFocused}
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