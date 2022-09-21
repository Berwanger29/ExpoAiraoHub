import { useState } from 'react'
import { Alert } from 'react-native'

import {
    BackButtonContainer,
    Container,
    Input,
    FormContainer,
    Title,
    TitleContainer,
    Text,
    EyeInputContainer,
    EyeContainer
} from './styles'

import LoginAreaButton from '../../../components/LoginAreaButton'
import BackButton from '../../../components/BackButton'

import { auth } from '../../../../firebase'
import Keyboard from '../../../components/KeyBoard'
import { Entypo } from '@expo/vector-icons';
import theme from '../../../global/styles/theme'


const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [iconEyeName, setIconEyeName] = useState('eye-with-line')

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

    function toggleShowPassword() {
        if (showPassword) {
            setShowPassword(!showPassword)
            setIconEyeName('eye')
        } else {
            setShowPassword(!showPassword)
            setIconEyeName('eye-with-line')
        }
    }

    return (
        <Keyboard>
            <Container>
                <TitleContainer>
                    <BackButtonContainer>
                        <BackButton />
                    </BackButtonContainer>
                    <Title>
                        AiraoHub
                    </Title>
                </TitleContainer>
                <FormContainer>
                    <Text>
                        Crie uma conta com e-mail e senha.
                    </Text>
                    <Input
                        placeholder='email'
                        onChangeText={(e) => setEmail(e)}
                        returnKeyType='done'
                        keyboardType='email-address'
                    />
                    <EyeInputContainer>
                        <Input
                            placeholder='senha'
                            onChangeText={(e) => setPassword(e)}
                            returnKeyType='done'
                            secureTextEntry={showPassword}
                        />
                        <EyeContainer
                            onPress={() => toggleShowPassword()}
                        >
                            <Entypo name={iconEyeName} size={24} color={theme.colors.light} />
                        </EyeContainer>
                    </EyeInputContainer>
                    <Input
                        placeholder='confirme sua senha'
                        onChangeText={(e) => setConfirmPassword(e)}
                        returnKeyType='done'
                        secureTextEntry={showPassword}
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