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


import BackButton from '../../components/BackButton';
import SelectButton from '../../components/_Screens/Quiz/SelectButton';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import Lottie from 'lottie-react-native';

import theme from '../../global/styles/theme'
import duet from '../../../assets/animations/duet.json'

import { RFPercentage } from 'react-native-responsive-fontsize';
import { StackActions, useNavigation } from '@react-navigation/native';

const QuizC = () => {

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
                    />
                    <SelectButton
                        text="Nacionais"
                    />
                    <SelectButton
                        text="Silêncio"
                    />
                </ButtonsContainer>
            </Main>
            <Button
                style={{
                    elevation: 2
                }}
                onPress={()=>{
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