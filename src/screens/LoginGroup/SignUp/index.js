import { useState } from 'react'
import { Alert } from 'react-native'

import {
    BackButtonContainer,
    Container,
    Input,
    FormContainer,
    Title,
    TitleContainer
} from './styles'

import LoginAreaButton from '../../../components/LoginAreaButton'
import BackButton from '../../../components/BackButton'

import { auth } from '../../../../firebase'
import Keyboard from '../../../components/KeyBoard'


const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSignUp() {
        if (password === confirmPassword) {
            auth.createUserWithEmailAndPassword(email, password)
                .then(userCredentials => {
                    const user = userCredentials.user
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
        <Keyboard>
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
        </Keyboard>
    )
}

export default SignUp