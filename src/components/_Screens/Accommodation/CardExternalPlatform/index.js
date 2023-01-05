import { useContext } from "react";
import {
    Container,
} from "./styles"

import { useNavigation } from '@react-navigation/native';
import { TextRegular } from "../../../Texts";
import theme from "../../../../global/styles/theme";

import LanguageSelector from "../../../../utils/LanguageSelector";

const CardExternalPlatform = () => {

    const { portuguese, english, language } = useContext(LanguageSelector);
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
                text={language.accomodation.casas.title}
                color={theme.colors.darkGreen}
                format='justify'
            />
        </Container>
    )
}

export default CardExternalPlatform;