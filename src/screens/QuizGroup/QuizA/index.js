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

const QuizA = () => {

    const navigation = useNavigation()

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
                    />
                    <SelectButton
                        text="Passeio de barco"
                    />
                    <SelectButton
                        text="Passeio na praça"
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