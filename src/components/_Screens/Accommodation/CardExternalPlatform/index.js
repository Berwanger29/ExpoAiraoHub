import {
    Container,
    Title,
} from "./styles"

import { useNavigation } from '@react-navigation/native';

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
            <Title>
                Casas de temporada
            </Title>
        </Container>
    )
}

export default CardExternalPlatform;