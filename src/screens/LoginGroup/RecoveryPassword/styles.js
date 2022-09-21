import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.light};
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
`
export const TitleContainer = styled.View`
    width: 100%;
`
export const Title = styled.Text`
    font-size:${RFValue(30)}px ;
    font-family: ${(props) => props.theme.fonts.black};
    align-self: center;
    margin-top: 20px;
`
export const FormContainer = styled.View`
    flex: 0.5;
    padding-top: 30px;
`

export const Text = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    padding-bottom: 10px;
`
export const Input = styled.TextInput`
    background-color: ${(props) => props.theme.colors.gray};
    width: 100%;
    height: ${RFValue(50)}px;
    margin-bottom: 10px;
    padding-left: 10px;
    border-radius: 5px;
`
export const ButtonContainer = styled.View`
    position: absolute;
    left: 1px;
    right: 1px;
    bottom: 11px;
`