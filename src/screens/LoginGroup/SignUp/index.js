import { useState } from 'react'
import { Alert } from 'react-native'

import {
    BackButtonContainer,
    Container,
    Input,
    FormContainer,
    EyeInputContainer,
    EyeContainer,
    ButtonContainer,
    ImageContainer,
    PrivacyContainer,
    CheckBox,
    Modal,
    ModalContainer,
    ModalContent,
    ModalHeader,
    PrivacyText,
    CloseModalButton
} from './styles'

import LoginAreaButton from '../../../components/LoginAreaButton'
import InvisibleButton from '../../../components/InvisibleButton'
import BackButton from '../../../components/BackButton'
import Keyboard from '../../../components/KeyBoard'
import { TextRegular } from '../../../components/Texts'

import { Entypo, MaterialIcons, EvilIcons } from '@expo/vector-icons';

import { auth } from '../../../../firebase'
import theme from '../../../global/styles/theme'
import { privacyText } from '../../../../privacyPolicy'
import Logo from '../../../components/Logo'


const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [iconEyeName, setIconEyeName] = useState('eye-with-line')
    const [confirmationPrivacy, setConfirmationPrivacy] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);


    function handleSignUp() {
        if (confirmationPrivacy) {
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
        } else {
            Alert.alert(
                "Privacidade",
                "Se deseja criar sua conta, aceite os termos da nossa política de privacidade"
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

    function toogleAcceptPrivacyTerms() {
        setConfirmationPrivacy(!confirmationPrivacy)
    }

    return (
        <Keyboard>
            <ImageContainer
                source={require('../../../../assets/images/plantBackground.jpg')}
            >
                <Container>
                    <Logo />
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
                    <PrivacyContainer>
                        <CheckBox
                            onPress={() => toogleAcceptPrivacyTerms()}
                            isConfirmed={confirmationPrivacy}
                        >
                            <MaterialIcons name="done" size={20} color={theme.colors.light} />
                        </CheckBox>
                        <InvisibleButton
                            onPress={() => setModalVisible(true)}
                        >
                            <TextRegular
                                text='Aceito os termos da política de privacidade'
                                textDecoration='underline'
                            />
                        </InvisibleButton>
                    </PrivacyContainer>

                    <Modal
                        transparent={true}
                        visible={modalVisible}
                    >
                        <ModalContainer>
                            <ModalContent>
                                <PrivacyText>
                                    <ModalHeader>
                                        <CloseModalButton
                                            onPress={() => setModalVisible(false)}
                                        >
                                            <EvilIcons name="close" size={30} color="black" />
                                        </CloseModalButton>
                                    </ModalHeader>
                                    <TextRegular
                                        text={privacyText}
                                        format='justify'
                                    />
                                </PrivacyText>
                            </ModalContent>
                        </ModalContainer>
                    </Modal>
                </Container>
            </ImageContainer>
        </Keyboard>
    )
}

export default SignUp