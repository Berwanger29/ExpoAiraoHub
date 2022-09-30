import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    margin-bottom: 40px;
`
export const Image = styled.Image`
    height: ${RFValue(221)}px;
    width: 100%;
    margin-bottom: 15px;
    border-radius: 20px;
`
export const PriceText = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${props => props.theme.colors.black};
`