import BackButton from "../../../components/BackButton";
import { TextRegular, TextSubTitle } from "../../../components/Texts";
import {
    Container,
    Header,
    Main,
    Scroll,
    TitleContainer,
} from "./styles";

import { privacyText } from '../../../../privacyPolicy'


const UserPrivacy = () => {
    return (
        <Container>
            <Header>

                <BackButton />

                <TitleContainer>
                    <TextSubTitle
                        text='Privacidade'
                    />
                </TitleContainer>
            </Header>
            <Main>
                <Scroll>
                    <TextRegular
                        format='justify'
                        text={privacyText}
                    />
                </Scroll>
            </Main>
        </Container>
    )
}

export default UserPrivacy