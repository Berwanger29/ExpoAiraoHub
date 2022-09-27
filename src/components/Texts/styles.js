import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.black};
    font-size: ${RFValue(30)}px;
    color: ${(props) => props.color ? props.color : 'black'};
`
export const SubTitle = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: ${RFValue(26)}px;
    color: ${(props) => props.color ? props.color : 'black'};
`
export const Regular = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    text-align: ${(props) => props.format ? props.format : 'left'};
    color: ${(props) => props.color ? props.color : 'black'};
`
export const Thin = styled.Text`
    font-family: ${(props) => props.theme.fonts.light};
    font-size: ${RFValue(14)}px;
    color: ${(props) => props.color ? props.color : 'black'};
    
`