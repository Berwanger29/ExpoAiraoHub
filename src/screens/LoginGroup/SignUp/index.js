import { useState } from 'react'
import { Alert } from 'react-native'

import {
    BackButtonContainer,
    Container,
    Input,
    FormContainer,
    TitleContainer,
    EyeInputContainer,
    EyeContainer,
    ButtonContainer,
    ImageContainer
} from './styles'

import LoginAreaButton from '../../../components/LoginAreaButton'
import BackButton from '../../../components/BackButton'

import { auth } from '../../../../firebase'
import Keyboard from '../../../components/KeyBoard'
import { Entypo } from '@expo/vector-icons';
import theme from '../../../global/styles/theme'
import { TextTitle, TextRegular } from '../../../components/Texts'


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
            <ImageContainer
                source={require('../../../../assets/images/plantBackground.jpg')}
            >
                <Container>

                    <TitleContainer>

                        <TextTitle
                            text='Airão Hub'
                        />
                    </TitleContainer>
                    <BackButtonContainer>
                        <BackButton />
                    </BackButtonContainer>
                    <FormContainer>
                        <TextRegular
                            text='Crie uma conta com e-mail e senha.'
                        />
                        <Input
                            placeholder='e-mail'
                            placeholderTextColor={theme.colors.darkGreen}
                            onChangeText={(e) => setEmail(e)}
                            returnKeyType='done'
                            keyboardType='email-address'
                            style={{ marginTop: 15 }}
                        />
                        <EyeInputContainer>
                            <Input
                                placeholder='senha'
                                placeholderTextColor={theme.colors.darkGreen}
                                onChangeText={(e) => setPassword(e)}
                                returnKeyType='done'
                                secureTextEntry={showPassword}
                            />
                            <EyeContainer
                                onPress={() => toggleShowPassword()}
                            >
                                <Entypo name={iconEyeName} size={24} color={theme.colors.green} />
                            </EyeContainer>
                        </EyeInputContainer>
                        <Input
                            placeholder='confirme sua senha'
                            placeholderTextColor={theme.colors.darkGreen}
                            onChangeText={(e) => setConfirmPassword(e)}
                            returnKeyType='done'
                            secureTextEntry={showPassword}
                        />
                    </FormContainer>
                    <ButtonContainer>
                        <LoginAreaButton
                            label='Criar conta'
                            onPress={handleSignUp}
                        />
                    </ButtonContainer>
                </Container>
            </ImageContainer>
        </Keyboard>
    )
}

export default SignUp