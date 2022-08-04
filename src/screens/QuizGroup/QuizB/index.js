import {
    Container,
    Header,
    Main,
    TextContainer,
    Button,
    LabelCountText,
    QuestionText,
    ButtonsContainer,
    ButtonBackContainer,
    AnimationContainer
} from './styles';

import SelectButton from '../../../components/_Screens/Quiz/SelectButton';

import { Entypo } from '@expo/vector-icons';
import Lottie from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

import theme from '../../../global/styles/theme'
import drink from '../../../../assets/animations/drink.json'

import { useNavigation } from '@react-navigation/native';
import BackButton from '../../../components/BackButton';

const QuizB = () => {

    const navigation = useNavigation()

    return (
        <Container>
            <StatusBar
                style='auto'
            />
            <Header>
                <AnimationContainer>
                    <Lottie
                        autoPlay
                        loop
                        source={drink}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </AnimationContainer>
                <ButtonBackContainer>
                    <BackButton />
                </ButtonBackContainer>
            </Header>
            <Main>

                <TextContainer>
                    <LabelCountText>
                        Questão 2 de 3
                    </LabelCountText>
                    <QuestionText>
                        Em um dia de sol, o que você prefere ?
                    </QuestionText>
                </TextContainer>

                <ButtonsContainer>
                    <SelectButton
                        text="Açaí gelado"
                    />
                    <SelectButton
                        text="Limonada"
                    />
                    <SelectButton
                        text="Sorvete"
                    />
                </ButtonsContainer>
            </Main>
            <Button
                style={{
                    elevation: 2
                }}
                onPress={() => navigation.navigate('QuizC')}
            >
                <Entypo name="chevron-right" size={24} color={theme.colors.green} />
            </Button>
        </Container>
    )
}

export default QuizB