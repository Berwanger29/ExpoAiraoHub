import {
    Container
} from './styles'

import { FontAwesome5 } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

const UserButton = () => {

    const navigation = useNavigation()

    return (
        <Container
            style={{
                elevation: 5
            }}
            onPress={() => navigation.navigate("User")}
        >
            <FontAwesome5 name="user-alt" size={RFValue(22)} color="black" />
        </Container>
    )
}

export default UserButton