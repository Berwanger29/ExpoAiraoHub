import { useState, useEffect } from 'react'
import { Alert } from 'react-native';
import {
    Container,
    InputContainer,
    LabelInput,
    SignUpButtonText,
    SignUpContainer,
    SignUpText,
    Title,
    TitleContainer,
    UserInput
} from './styles'

import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native';

import theme from '../../global/styles/theme'
import LoginAreaButton from '../../components/LoginAreaButton';

const Login = () => {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home')
            }
        })
        return unsubscribe
    }, [])

    function handleLogin() {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log('Logged in with' + ' ' + user.email)
            })
            .catch(e => {
                Alert.alert(
                    "Erro",
                    e.message,
                    [
                        {
                            text: 'Ok', onPress: () => null
                        }
                    ]
                )
            })
    }


    function moveToSignUp() {
        navigation.navigate('SignUp')
    }


    return (
        <Container>
            <TitleContainer>
                <Title>
                    AiraoHUB
                </Title>
            </TitleContainer>


            <InputContainer>
                <LabelInput>
                    Login
                </LabelInput>
                <UserInput
                    placeholder='Email'
                    placeholderTextColor={theme.colors.light}
                    onChangeText={(e) => setEmail(e)}
                />

                <UserInput
                    placeholder='Senha'
                    placeholderTextColor={theme.colors.light}
                    onChangeText={(e) => setPassword(e)}
                />

                <LoginAreaButton
                    label='Entrar'
                    onPress={() => handleLogin()}
                />
            </InputContainer>

            <SignUpContainer>
                <SignUpText>
                    É novo no aplicativo ?
                </SignUpText>
                <SignUpButtonText
                    onPress={() => moveToSignUp()}
                >
                    <SignUpText
                        style={{
                            color: theme.colors.green
                        }}
                    >{' '}Cadastre-se</SignUpText>
                </SignUpButtonText>
            </SignUpContainer>
        </Container>
    )
}

export default Login