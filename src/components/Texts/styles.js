import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Title = styled.Text`
    color: ${(props) => props.color ? props.color : 'black'};
    font-family: ${(props) => props.theme.fonts.black};
    font-size: 30px;
    text-align: ${(props) => props.format ? props.format : 'left'};
    text-decoration: ${(props) => props.textDecoration ? props.textDecoration : 'none'};
`
export const SubTitle = styled.Text`
    color: ${(props) => props.color ? props.color : 'black'};
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: 26px;
    text-align: ${(props) => props.format ? props.format : 'left'};
    text-decoration: ${(props) => props.textDecoration ? props.textDecoration : 'none'};
`
export const Regular = styled.Text`
    color: ${(props) => props.color ? props.color : 'black'};
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 18px;
    text-align: ${(props) => props.format ? props.format : 'left'};
    text-decoration: ${(props) => props.textDecoration ? props.textDecoration : 'none'};
`
export const Thin = styled.Text`
    color: ${(props) => props.color ? props.color : 'black'};
    font-family: ${(props) => props.theme.fonts.light};
    font-size: 14px;
    text-align: ${(props) => props.format ? props.format : 'left'};
    text-decoration: ${(props) => props.textDecoration ? props.textDecoration : 'none'};
`