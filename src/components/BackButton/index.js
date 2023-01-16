import { Container } from "./styles"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

import { useNavigation } from '@react-navigation/native'

import theme from "../../global/styles/theme";



const BackButton = () => {

    const navigation = useNavigation()

    return (
        <Container
            onPress={() => navigation.goBack()}
            style={{
                elevation: 5,
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            }}
        >
            <MaterialCommunityIcons name="arrow-left-top" size={RFValue(24)} color={theme.colors.black} />
        </Container>
    )
}

export default BackButton