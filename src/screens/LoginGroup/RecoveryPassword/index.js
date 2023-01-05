import { useState } from "react"
import {
    Container,
    Header,
    FormContainer,
    Input,
    ButtonContainer,
    BackButtonContainer,
    TitleContainer,
    ImageContainer
} from "./styles"

import BackButton from "../../../components/BackButton"
import LoginAreaButton from "../../../components/LoginAreaButton"

import { auth } from "../../../../firebase"
import { Alert } from "react-native"
import { TextRegular, TextSubTitle } from "../../../components/Texts"
import theme from "../../../global/styles/theme"

import { useContext } from "react";
import LanguageSelector from "../../../utils/LanguageSelector"

const RecoveryPassword = () => {

    const { portuguese, english, language } = useContext(LanguageSelector);

    const [email, setResetEmail] = useState('')

    function handleResetEmail() {
        auth.sendPasswordResetEmail(email)
            .then(() => {
                console.log(email)
                console.log('email enviado')
                Alert.alert(
                    "Sucesso",
                    "E-mail enviado. Verifique sua caixa de spam"
                )
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <ImageContainer
            source={require('../../../../assets/images/plantBackground.jpg')}
        >
            <Container>
                <Header>
                    <TitleContainer>
                        <TextSubTitle
                            text={language.recoverPassword.recover}
                        />
                    </TitleContainer>
                    <BackButtonContainer>
                        <BackButton />
                    </BackButtonContainer>
                </Header>

                <FormContainer>
                    <TextRegular
                        text={language.recoverPassword.text}
                    />
                    <Input
                        placeholder={language.recoverPassword.email}
                        placeholderTextColor={theme.colors.darkGreen}
                        value={email}
                        onChangeText={(e) => setResetEmail(e)}
                    />
                </FormContainer>
                <ButtonContainer>
                    <LoginAreaButton
                        label={language.recoverPassword.button}
                        onPress={handleResetEmail}
                    />
                </ButtonContainer>
            </Container>
        </ImageContainer>
    )
}

export default RecoveryPassword