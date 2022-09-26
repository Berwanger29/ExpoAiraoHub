import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const SubTitle = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: ${RFValue(26)}px;
    color: ${(props) => props.color ? props.color : 'black'};
`