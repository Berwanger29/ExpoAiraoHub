import { Alert } from 'react-native';
import {
    Container,
    Header,
    UserIcon,
    Main,
    Footer,
    LogoutButton,
    LogOutText
} from './styles'

import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import { FontAwesome5 } from '@expo/vector-icons';


import { RFValue } from 'react-native-responsive-fontsize';
import { auth } from '../../../firebase';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';




const User = () => {

    const navigation = useNavigation()
    const { isFirstTime, setIsFirstTime } = useContext(AuthContext)


    function handleLogOut() {
        Alert.alert(
            "Sair",
            "Deseja mesmo sair ?",
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
                            })
                            .catch((e) => console.log(e))
                    }
                }
            ]
        )

    }

    return (
        <Container>
            <Header>

                <BackButton />

                <UserIcon>
                    <FontAwesome5
                        name="user-alt"
                        size={RFValue(38)}
                        color="black"
                    />
                </UserIcon>
            </Header>
            <Main>
                <Title
                    text="Configurações da conta"
                />
            </Main>

            <Footer>
                <LogoutButton
                    onPress={() => handleLogOut()}
                >
                    <LogOutText>
                        Sair do app
                    </LogOutText>
                </LogoutButton>
            </Footer>
        </Container>
    )
}

export default User