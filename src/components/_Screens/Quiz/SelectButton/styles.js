import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    background-color: ${(props) => props.theme.colors.green};
    width: 60%;
    height: ${RFValue(50)}px;

    border-radius: 5px;

    align-items: center;
    justify-content: center;
`

export const LabelOption = styled.Text`
    font-family: ${props => props.theme.fonts.light};
    font-size: ${RFValue(16)}px;
    color: ${props => props.theme.colors.light};
`