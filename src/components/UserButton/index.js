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
                elevation: 5,
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            }}
            onPress={() => navigation.navigate("User")}
        >
            <FontAwesome5 name="user-alt" size={RFValue(22)} color="black" />
        </Container>
    )
}

export default UserButton