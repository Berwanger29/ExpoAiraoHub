import { useContext } from "react";
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

import LanguageSelector from "../../../utils/LanguageSelector";

const UserContact = () => {

    const { portuguese, english, language } = useContext(LanguageSelector);

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
                        text={language.account.contact.contact}
                    />
                </Header>
                <Main>
                    <Scroll>
                        <CardText>
                            <TextRegular
                                format='justify'
                                text={language.account.contact.text}
                            />
                        </CardText>
                        <LinkButton
                            label={language.account.contact.button}
                            link={'mailto:seminturna15@gmail.com'}
                            type='mail'
                        />
                    </Scroll>
                </Main>
            </Container>
        </BackgroundImage>
    )
}

export default UserContact