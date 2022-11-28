import BackButton from "../../../components/BackButton";
import {
    Container,
    ContainerBackButton,
    Header,
    Main,
    Scroll,
} from "./styles";

import { TextRegular, TextSubTitle } from '../../../components/Texts'
import BackgroundImage from "../../../components/BackgroundImage";
import CardText from "../../../components/_Screens/User/CardText";
import LinkButton from "../../../components/_Screens/Map/LinkButton";

const UserContact = () => {
    return (
        <BackgroundImage
            filter={1}
            image={require('../../../../assets/images/plantBackground.jpg')}
        >
            <Container>
                <ContainerBackButton>
                    <BackButton />
                </ContainerBackButton>
                <Header>
                    <TextSubTitle
                        text='Contato'
                    />
                </Header>
                <Main>
                    <Scroll>
                        <CardText>
                            <TextRegular
                                format='justify'
                                text='Inserir informações de contatos para identificação de melhorias no aplicativo ou sugestões. Email da secretaria. “ Para melhorias ou sugestões no aplicativo nos contactar no emailXXXXXx”'
                            />
                        </CardText>
                        <LinkButton
                            label='Enviar e-mail'
                            link={'mailto:vibersou@gmail.com'}
                            type='mail'
                        />
                    </Scroll>
                </Main>
            </Container>
        </BackgroundImage>
    )
}

export default UserContact