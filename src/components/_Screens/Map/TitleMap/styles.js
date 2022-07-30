import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const TitleText = styled.Text`
    font-family: ${props => props.theme.fonts.bold};
    font-size: ${RFValue(20)}px;

    color: ${props => props.theme.colors.black};
    margin-top: 10px;
    margin-bottom: 20px;
`