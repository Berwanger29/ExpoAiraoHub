import {
    Container,
    Header,
    Main,
    Button
} from './styles';

import Lottie from 'lottie-react-native';

import boating from '../../../assets/animations/boating.json'
import SelectButton from '../../components/_Screens/Quiz/SelectButton';
import { RFPercentage } from 'react-native-responsive-fontsize';


const QuizA = () => {
    return (
        <Container>
            <Header>
                <Lottie
                    autoPlay
                    loop
                    source={boating}
                    style={{
                        width: RFPercentage(50)
                    }}
                />
            </Header>
            <Main>
                <SelectButton
                    text="Opção 1"
                />
                <SelectButton
                    text="Opção 2"
                />
                <SelectButton
                    text="Opção 3"
                />
            </Main>
            <Button>

            </Button>
        </Container>
    )
}

export default QuizA