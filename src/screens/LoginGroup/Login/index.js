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
    ButtonLanguage,
    CountryFlag,
} from './styles'

import { auth } from '../../../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';

import LoginAreaButton from '../../../components/LoginAreaButton';
import Keyboard from '../../../components/KeyBoard';
import { Entypo } from '@expo/vector-icons';

import { TextRegular, TextSubTitle, TextThin } from '../../../components/Texts';
import Logo from '../../../components/Logo';
import theme from '../../../global/styles/theme'

import * as pt from '../../../utils/pt'
import * as en from '../../../utils/en'

import { selectLanguage } from '../../../utils/languageSelector';

const Login = () => {

    const portuguese = pt.labels
    const english = en.labels
    const [selectedLanguage, setSelectedLanguage] = useState('pt')
    const [language, setLanguage] = useState(portuguese)


    const navigation = useNavigation()

    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [iconEyeName, setIconEyeName] = useState('eye-with-line')

    function handleLanguage() {
        if (selectedLanguage === 'pt') {
            setLanguage(portuguese)
        } else if (selectedLanguage === 'en') {
            setLanguage(english)
        }
    }

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
        handleLanguage()
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
                                            text={language.login.login}
                                        />

                                        <ButtonLanguage
                                            onPress={() => handleLanguage()}
                                        >
                                            <CountryFlag>
                                                BR
                                            </CountryFlag>
                                        </ButtonLanguage>
                                    </LabelContainer>

                                    <UserInput
                                        placeholder={language.login.email}
                                        placeholderTextColor={theme.colors.gray}
                                        onChangeText={(e) => setEmail(e)}
                                        keyboardType='email-address'
                                    />


                                    <EyeInputContainer>
                                        <UserInput
                                            placeholder={language.login.password}
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
                                            text={language.login.new}
                                        />
                                        <ButtonText
                                            onPress={() => moveToSignUp()}
                                        >
                                            <TextThin
                                                color={theme.colors.green}
                                                text={language.login.newContinue}
                                                textDecoration='underline'
                                            />
                                        </ButtonText>
                                    </RecoveryContainer>

                                    <LoginAreaButton
                                        label={language.login.button}
                                        onPress={() => handleLogin()}
                                    />
                                    <View style={{ marginBottom: 10 }}>
                                        <TextThin
                                            text={language.login.or}
                                        />
                                    </View>
                                    <ButtonText
                                        onPress={() => navigation.navigate('QuizStack')}
                                    >
                                        <TextRegular
                                            color={theme.colors.green}
                                            text={language.login.anonimousLogin}
                                            textDecoration='underline'
                                        />
                                    </ButtonText>
                                </InputContainer>

                                <SignUpContainer>
                                    <TextThin
                                        text={language.login.forgot}
                                    />
                                    <ButtonText
                                        onPress={() => moveToRecovery()}
                                    >
                                        <TextThin
                                            color={theme.colors.green}
                                            text={language.login.retrieve}
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