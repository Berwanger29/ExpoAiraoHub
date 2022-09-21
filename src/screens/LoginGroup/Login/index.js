import { useState, useEffect } from 'react'
import { ActivityIndicator, Alert } from 'react-native';
import {
    Container,
    InputContainer,
    LabelInput,
    RecoveryContainer,
    RecoveryText,
    ButtonText,
    SignUpContainer,
    SignUpText,
    Title,
    TitleContainer,
    UserInput,
    LoadingContainer,
    EyeContainer,
    EyeInputContainer,
} from './styles'

import { auth } from '../../../../firebase'
import theme from '../../../global/styles/theme'
import { StackActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginAreaButton from '../../../components/LoginAreaButton';
import Keyboard from '../../../components/KeyBoard';
import { Entypo } from '@expo/vector-icons';

const Login = () => {

    const navigation = useNavigation()

    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [iconEyeName, setIconEyeName] = useState('eye-with-line')


    function autoLogin() {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                async function getData() {
                    try {
                        const jsonValue = await AsyncStorage.getItem('@airaoHub_infoProfile')
                        if (jsonValue !== null) {
                            navigation.dispatch(
                                StackActions.replace('TabNavigator')
                            )

                        } else {
                            navigation.navigate('QuizStack')
                        }
                    } catch (e) {
                        console.log(e)
                    }
                }
                getData()

            } else {
                setLoading(false)
            }
        })
        return unsubscribe
    }

    function handleLogin() {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                autoLogin()
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

    function moveToRecovery() {
        navigation.navigate('RecoveryPassword')
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

    useEffect(() => {
        autoLogin()
    }, [])




    return (
        <>
            {
                loading === true ?
                    <LoadingContainer>
                        <ActivityIndicator
                            size="large"
                        />
                    </LoadingContainer>
                    :

                    <Keyboard>
                        <Container>
                            <TitleContainer>
                                <Title>
                                    Airão HUB
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
                                    keyboardType='email-address'
                                />

                                <EyeInputContainer>
                                    <UserInput
                                        placeholder='Senha'
                                        placeholderTextColor={theme.colors.light}
                                        onChangeText={(e) => setPassword(e)}
                                        secureTextEntry={showPassword}
                                    />
                                    <EyeContainer
                                        onPress={() => toggleShowPassword()}
                                    >
                                        <Entypo name={iconEyeName} size={24} color={theme.colors.light} />
                                    </EyeContainer>
                                </EyeInputContainer>

                                <RecoveryContainer>
                                    <RecoveryText>
                                        Esqueceu sua senha ?
                                    </RecoveryText>
                                    <ButtonText
                                        onPress={() => moveToRecovery()}
                                    >
                                        <RecoveryText
                                            style={{
                                                color: theme.colors.green
                                            }}
                                        >
                                            {' '} Recuperar.
                                        </RecoveryText>
                                    </ButtonText>
                                </RecoveryContainer>

                                <LoginAreaButton
                                    label='Entrar'
                                    onPress={() => handleLogin()}
                                />
                            </InputContainer>

                            <SignUpContainer>
                                <SignUpText>
                                    É novo no aplicativo ?
                                </SignUpText>
                                <ButtonText
                                    onPress={() => moveToSignUp()}
                                >
                                    <SignUpText
                                        style={{
                                            color: theme.colors.green
                                        }}
                                    >{' '}Cadastre-se</SignUpText>
                                </ButtonText>
                            </SignUpContainer>
                        </Container>
                    </Keyboard>
            }
        </>
    )
}

export default Login