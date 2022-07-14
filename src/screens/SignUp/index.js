import { useState } from 'react'
import { Alert } from 'react-native'
import LoginAreaButton from '../../components/LoginAreaButton'

import { auth } from '../../../firebase'

import {
    BackButtonContainer,
    Container,
    Input,
    FormContainer,
    Title,
    TitleContainer
} from './styles'
import BackButton from '../../components/BackButton'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSignUp() {

        if (password === confirmPassword) {
            auth.createUserWithEmailAndPassword(email, password)
                .then(userCredentials => {
                    const user = userCredentials.user
                    console.log(user.email)
                })
                .catch(e => {
                    Alert.alert(
                        "Erro",
                        e.message,
                        [
                            { text: 'OK', onPress: () => { } }
                        ]
                    )
                })
        } else {
            Alert.alert(
                "Erro",
                "Senhas não conferem. Por favor, digite senha novamente.",
                [
                    { text: 'OK', onPress: () => { } }
                ]
            )
        }


    }

    return (
        <Container>

            <TitleContainer>
                <BackButtonContainer>
                    <BackButton

                    />
                </BackButtonContainer>
                <Title>
                    AiraoHub
                </Title>
            </TitleContainer>
            <FormContainer>
                <Input
                    placeholder='email'
                    onChangeText={(e) => setEmail(e)}
                    returnKeyType='done'
                    keyboardType='email-address'
                />
                <Input
                    placeholder='digite seu nome'
                    onChangeText={(e) => setName(e)}
                    returnKeyType='done'
                    keyboardType='default'
                />
                <Input
                    placeholder='senha'
                    onChangeText={(e) => setPassword(e)}
                    returnKeyType='done'
                    secureTextEntry
                />
                <Input
                    placeholder='confirme sua senha'
                    onChangeText={(e) => setConfirmPassword(e)}
                    returnKeyType='done'
                    secureTextEntry
                />
            </FormContainer>
            <LoginAreaButton
                label='Criar conta'
                onPress={handleSignUp}
            />
        </Container>
    )
}

export default SignUp