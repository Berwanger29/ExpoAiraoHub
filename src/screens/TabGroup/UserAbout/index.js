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

import LanguageSelector from "../../../utils/LanguageSelector";

const UserAbout = () => {

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
                        text={language.account.about.about}
                    />
                </Header>
                <Main>
                    <Scroll>
                        <CardText>
                            <TextRegular
                                format='justify'
                                text={language.account.about.text}
                            />
                        </CardText>
                    </Scroll>
                </Main>
            </Container>
        </BackgroundImage>
    )
}

export default UserAbout