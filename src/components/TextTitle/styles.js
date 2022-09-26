import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.black};
    font-size: ${RFValue(30)}px;
    color: ${(props) => props.color ? props.color : 'black'};
`