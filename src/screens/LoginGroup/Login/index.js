import { useState, useEffect } from 'react'
import { ActivityIndicator, Alert, StatusBar, View } from 'react-native';
import {
    Container,
    InputContainer,
    LabelContainer,
    RecoveryContainer,
    ButtonText,
    SignUpContainer,
    UserInput,
    LoadingContainer,
    EyeContainer,
    EyeInputContainer,
    ImageContainer,
} from './styles'

import { auth } from '../../../../firebase'
import theme from '../../../global/styles/theme'
import { StackActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginAreaButton from '../../../components/LoginAreaButton';
import Keyboard from '../../../components/KeyBoard';
import { Entypo } from '@expo/vector-icons';

import { TextRegular, TextSubTitle, TextThin } from '../../../components/Texts';
import Logo from '../../../components/Logo';
import LogoSVG from '../../../components/LogoSVG';


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
                        <ImageContainer
                            source={require('../../../../assets/images/plantBackground.jpg')}
                        >
                            <StatusBar
                                barStyle='dark-content'
                                backgroundColor="transparent"
                                translucent
                            />
                            <Container>
                                <Logo />
                                {/* <LogoContainer>
                                    <LogoSVG

                                    />
                                </LogoContainer> */}
                                <InputContainer>
                                    <LabelContainer>
                                        <TextSubTitle
                                            text='Login'
                                        />
                                    </LabelContainer>

                                    <UserInput
                                        placeholder='Email'
                                        placeholderTextColor={theme.colors.gray}
                                        onChangeText={(e) => setEmail(e)}
                                        keyboardType='email-address'
                                    />


                                    <EyeInputContainer>
                                        <UserInput
                                            placeholder='Senha'
                                            placeholderTextColor={theme.colors.gray}
                                            onChangeText={(e) => setPassword(e)}
                                            secureTextEntry={showPassword}
                                        />
                                        <EyeContainer
                                            onPress={() => toggleShowPassword()}
                                        >
                                            <Entypo name={iconEyeName} size={24} color={theme.colors.darkGreen} />
                                        </EyeContainer>
                                    </EyeInputContainer>

                                    <RecoveryContainer>
                                        <TextThin
                                            text='É novo no aplicativo ?'
                                        />
                                        <ButtonText
                                            onPress={() => moveToSignUp()}
                                        >
                                            <TextThin
                                                color={theme.colors.green}
                                                text=' Cadastre-se'
                                                textDecoration='underline'
                                            />
                                        </ButtonText>
                                    </RecoveryContainer>

                                    <LoginAreaButton
                                        label='Entrar'
                                        onPress={() => handleLogin()}
                                    />
                                    <View style={{ marginBottom: 10 }}>
                                        <TextThin
                                            text='ou'
                                        />
                                    </View>
                                    <ButtonText
                                        onPress={() => navigation.navigate('QuizStack')}
                                    >
                                        <TextRegular
                                            color={theme.colors.green}
                                            text='Login anônimo'
                                            textDecoration='underline'
                                        />
                                    </ButtonText>
                                </InputContainer>

                                <SignUpContainer>
                                    <TextThin
                                        text='Esqueceu sua senha ?'
                                    />
                                    <ButtonText
                                        onPress={() => moveToRecovery()}
                                    >
                                        <TextThin
                                            color={theme.colors.green}
                                            text=' Recuperar'
                                            textDecoration='underline'
                                        />
                                    </ButtonText>
                                </SignUpContainer>
                            </Container>
                        </ImageContainer>
                    </Keyboard>
            }
        </>
    )
}

export default Login