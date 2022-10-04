import { Alert } from 'react-native';
import {
    Container,
    Header,
    UserIcon,
    Main,
    Footer,
    LogoutButton,
    LogOutText,
    OptionsContainer,
    ContainerBackButton,
} from './styles'

import BackgroundImage from '../../../components/BackgroundImage';
import Options from '../../../components/_Screens/User/Options';
import BackButton from '../../../components/BackButton';
import { FontAwesome5 } from '@expo/vector-icons';


import { RFValue } from 'react-native-responsive-fontsize';
import { auth } from '../../../../firebase';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextSubTitle } from '../../../components/Texts';
import theme from '../../../global/styles/theme';


const User = () => {

    const navigation = useNavigation()

    function handleLogOut() {
        Alert.alert(
            "Sair",
            "Ao sair do aplicativo, suas informações serão apagadas do seu celular",
            [
                {
                    text: "Cancelar",
                    onPress: () => null,
                    style: "cancel"
                },
                {
                    text: "Sair",
                    onPress: () => {
                        auth.signOut()
                            .then(() => {
                                navigation.replace('Login')
                                async function removeData() {
                                    try {
                                        await AsyncStorage.removeItem('@airaoHub_infoProfile')
                                    } catch (e) {
                                        console.log(e)
                                    }

                                    console.log('Done.')
                                }
                                removeData()
                            })
                            .catch((e) => console.log(e))
                    }
                }
            ]
        )

    }

    return (
        <BackgroundImage
            image={require('../../../../assets/images/plantBackground.jpg')}
            filter
        >
            <Container>
                <Header>
                    <ContainerBackButton>
                        <BackButton />
                    </ContainerBackButton>
                    <UserIcon>
                        <FontAwesome5
                            name="user-alt"
                            size={RFValue(38)}
                            color="black"
                        />
                    </UserIcon>
                    <TextSubTitle
                        text="Configurações da conta"
                        color={theme.colors.darkGreen}
                    />
                </Header>
                <Main>
                    <OptionsContainer>
                        <Options
                            text='Perfil'
                            nameIcon="account-outline"
                            onPress={() => navigation.navigate('UserInfo')}
                        />
                        <Options
                            text='Privacidade'
                            nameIcon='shield-account-outline'
                            onPress={() => navigation.navigate('UserPrivacy')}
                        />
                        <Options
                            text='Sobre'
                            nameIcon='information-variant'
                            onPress={() => navigation.navigate('UserAbout')}
                        />
                        

                    </OptionsContainer>
                </Main>

                <Footer>
                    <LogoutButton
                        onPress={() => handleLogOut()}
                    >
                        <LogOutText>
                            Logout
                        </LogOutText>
                    </LogoutButton>
                </Footer>
            </Container>
        </BackgroundImage>
    )
}

export default User