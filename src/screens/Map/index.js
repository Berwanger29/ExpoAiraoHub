import {
    ButtonsContainer,
    Container,
    Header,
    Main,
    ImageMap,
    ImageContainer
} from "./styles"

import Title from '../../components/Title'
import TitleMap from "../../components/_Screens/Map/TitleMap"
import UserButton from "../../components/UserButton"
import UserButtonContainer from "../../components/UserButtonContiner"
import Buttons from "../../components/_Screens/Map/Buttons"


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import { RFValue } from "react-native-responsive-fontsize";
import theme from '../../global/styles/theme'
import TextMap from "../../components/_Screens/Map/TextMap"


const Map = () => {
    return (
        <Container>
            <Header>
                <UserButtonContainer>
                    <UserButton />
                </UserButtonContainer>
            </Header>
            <Title
                text="Como chegar"
            />
            <ButtonsContainer>
                <Buttons>
                    <MaterialCommunityIcons name="car-hatchback" size={RFValue(28)} color={theme.colors.light} />
                </Buttons>
                <Buttons>
                    <MaterialCommunityIcons name="taxi" size={RFValue(28)} color={theme.colors.semiLight} />
                </Buttons>
                <Buttons>
                    <MaterialCommunityIcons name="bus" size={RFValue(28)} color={theme.colors.semiLight} />
                </Buttons>
                <Buttons>
                    <MaterialCommunityIcons name="airplane" size={RFValue(28)} color={theme.colors.semiLight} />
                </Buttons>
                <Buttons>
                    <Ionicons name="boat" size={RFValue(26)} color={theme.colors.semiLight} />
                </Buttons>

            </ButtonsContainer>
            <Main
                showsVerticalScrollIndicator={false}
            >
                <TitleMap
                    title='Veículo pessoal'
                />

                <TextMap
                    text={'Para chegar em Novo Airão é necessário pegar  rodovia AM-070, que passa pela ponte Phelippe Daou e após passar pelo banho do Miriti, entrar na primeira saída para a AM-352 e seguir até o final. A viagem tem uma duração média de duas horas e meia.'}
                />
                <ImageContainer>
                    <ImageMap
                        source={require('../../../exceptionalImage/map/ponte.png')}
                    />
                </ImageContainer>
            </Main>
        </Container>
    )
}

export default Map