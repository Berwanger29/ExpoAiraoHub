import { useContext } from "react";
import BackButton from "../../../components/BackButton";
import {
    Container,
    ContainerBackButton,
    Header,
    Main,
    SafeContainer,
    Scroll,
} from "./styles";

import { TextRegular, TextSubTitle } from '../../../components/Texts'
import BackgroundImage from "../../../components/BackgroundImage";
import CardText from "../../../components/_Screens/User/CardText";

import LanguageSelector from "../../../utils/LanguageSelector";

const UserAbout = () => {

    const { portuguese, english, language } = useContext(LanguageSelector);

    return (
        <BackgroundImage
            filter={1}
            image={require('../../../../assets/images/plantBackground.jpg')}
        >
            <SafeContainer>
                <Container>
                    <Header>
                        <TextSubTitle
                            text={language.account.about.about}
                        />
                        <ContainerBackButton>
                            <BackButton />
                        </ContainerBackButton>
                    </Header>
                    <Main>
                        <CardText>
                            <TextRegular
                                format='justify'
                                text={language.account.about.text}
                            />
                        </CardText>
                    </Main>
                </Container>
            </SafeContainer>
        </BackgroundImage>
    )
}

export default UserAbout