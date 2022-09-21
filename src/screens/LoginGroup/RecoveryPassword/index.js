import {
    Container,
    TitleContainer,
    Title,
    FormContainer,
    Input,
    ButtonContainer,
    Text
} from "./styles"

import { useState } from "react"
import BackButton from "../../../components/BackButton"
import LoginAreaButton from "../../../components/LoginAreaButton"

import { auth } from "../../../../firebase"


const RecoveryPassword = () => {

    const [email, setResetEmail] = useState('')

    function handleResetEmail() {
        auth.sendPasswordResetEmail(email)
            .then(() => {
                console.log(email)
                console.log('email enviado')
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <Container>
            <TitleContainer>
                <BackButton />
                <Title>
                    Recuperar senha
                </Title>
            </TitleContainer>

            <FormContainer>
                <Text>
                    Digite o e-mail de recuperação de senha:
                </Text>
                <Input
                    placeholder='email'
                    value={email}
                    onChangeText={(e) => setResetEmail(e)}
                />
            </FormContainer>
            <ButtonContainer>
                <LoginAreaButton
                    label='Enviar email'
                    onPress={handleResetEmail}
                />
            </ButtonContainer>
        </Container>
    )
}

export default RecoveryPassword