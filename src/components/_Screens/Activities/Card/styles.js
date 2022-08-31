import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    width: 100%;
    margin: ${RFValue(10)}px 0px;
    `

export const ImageContainer = styled.View`
    width: 100%;
    height: ${RFValue(221)}px;
`

export const ImageCard = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: 5px;
`

export const Title = styled.Text`
    margin-top: 10px;
`

export const PriceContainer = styled.View`
    flex-direction: row;
    margin-top: 5px;
`

export const PriceLabel = styled.Text`
    font-family: ${props => props.theme.fonts.light};
`