import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const TextTitle = styled.Text`
    font-family: ${props => props.theme.fonts.black};
    font-size: ${RFValue(22)}px;

    color: ${props => props.theme.colors.darkGreen};

    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(20)}px;
`