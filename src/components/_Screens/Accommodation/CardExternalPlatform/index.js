import {
    Container,
} from "./styles"

import { useNavigation } from '@react-navigation/native';
import { TextRegular } from "../../../Texts";
import theme from "../../../../global/styles/theme";

const CardExternalPlatform = () => {

    const navigation = useNavigation()

    return (
        <Container
            activeOpacity={0.6}
            onPress={() => navigation.navigate('AccomodationExternal')}
            style={{
                elevation: 2
            }}
        >
            <TextRegular
                text='Casas de temporada'
                color={theme.colors.darkGreen}
                format='justify'
            />
        </Container>
    )
}

export default CardExternalPlatform;