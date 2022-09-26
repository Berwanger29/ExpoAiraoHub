import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Thin = styled.Text`
    font-family: ${(props) => props.theme.fonts.light};
    font-size: ${RFValue(14)}px;
    color: ${(props) => props.color ? props.color : 'black'};
`