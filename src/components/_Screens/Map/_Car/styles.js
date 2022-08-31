import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`

`

export const TextMiddle = styled.Text`
    align-self: center;
`

export const MapLinkContainer = styled.View`
    width: 100%;
    align-items: center;
`

export const MapButton = styled.TouchableOpacity`
    background-color: ${(props)=> props.theme.colors.semiLight};
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(25)}px;
`