import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Regular = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${(props) => props.color ? props.color : 'black'};
`