import { MapLinkContainer } from "./styles"

import * as Linking from 'expo-linking'
import { TextSubTitle } from "../../../Texts"
import { Feather } from '@expo/vector-icons';


import theme from "../../../../global/styles/theme"


const LinkButton = ({ type, label, link }) => {

    return (
        <MapLinkContainer
            onPress={() => Linking.openURL(link)}
        >
            <TextSubTitle
                text={label}
                color={theme.colors.light}
            />
            <Feather name={type === 'gps' ? 'navigation-2' : 'phone'} size={30} color={theme.colors.light} />
        </MapLinkContainer>
    )
}

export default LinkButton