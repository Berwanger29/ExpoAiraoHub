import {
    Container,
    ContainerBackButton,
    Header,
    IconButton,
    IconsContainer,
    ImageIcon,
    Main,
    Scroll,
    TextContainer,
} from "./styles"

import BackgroundImage from '../../../components/BackgroundImage'
import CardText from "../../../components/_Screens/User/CardText";
import BackButton from "../../../components/BackButton"
import * as Linking from 'expo-linking'
import { TextRegular, TextSubTitle } from "../../../components/Texts"

import theme from "../../../global/styles/theme"

const AccomodationExternal = () => {
    return (
        <BackgroundImage
            image={require('../../../../assets/images/plantBackground.jpg')}
            filter={0.6}
        >

            <Container>
                <Header>
                    <ContainerBackButton>
                        <BackButton />
                    </ContainerBackButton>

                    <TextSubTitle
                        text='Casas de temporada'
                        color={theme.colors.darkGreen}
                    />
                </Header>
                <Main>
                    <TextContainer>
                        <CardText>
                            <TextRegular
                                text='As casas de temporada em Novo Airão estão disponíveis por meio de plataformas especializadas neste tipo de serviço.'
                                format='justify'
                            />
                        </CardText>
                    </TextContainer>
                    <IconsContainer>
                        <IconButton
                            onPress={() => {
                                Linking.openURL('https://www.airbnb.com.br/novo-airao-brazil/stays')
                            }}
                            style={{
                                backgroundColor: '#E21A5F',
                            }}
                        >
                            <ImageIcon
                                resizeMode='contain'
                                source={require('../../../../assets/icons/airbnb.png')}
                                style={{
                                    backgroundColor: '#E21A5F',
                                    borderRadius: 5,
                                }}
                            />
                        </IconButton>

                        <IconButton
                            onPress={() => {
                                console.log('funciona')
                                Linking.openURL('https://www.booking.com/city/br/novo-airao.pt-br.html')
                            }}
                        >
                            <ImageIcon
                                resizeMode='contain'
                                source={require('../../../../assets/icons/booking.png')}
                                style={{

                                }}
                            />
                        </IconButton>
                    </IconsContainer>
                </Main>
            </Container>

        </BackgroundImage>
    )
}

export default AccomodationExternal