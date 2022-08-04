import {
    BackButtonContainer,
    Container,
    TitleContainer,
    Title,
    FormContainer
} from "./styles"

import BackButton from "../../../components/BackButton"


const RecoveryPassword = () => {
    return (
        <Container>
            <TitleContainer>
                <BackButtonContainer>
                    <BackButton />
                </BackButtonContainer>
                <Title>
                    Recuperar senha
                </Title>
            </TitleContainer>

            <FormContainer>

            </FormContainer>
        </Container>
    )
}

export default RecoveryPassword