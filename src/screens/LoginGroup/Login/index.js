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
} from './styles'

import { auth } from '../../../../firebase'
import theme from '../../../global/styles/theme'
import { StackActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginAreaButton from '../../../components/LoginAreaButton';
import Keyboard from '../../../components/KeyBoard';

const Login = () => {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)


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
                            //navigation.navigate('TabNavigator')
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