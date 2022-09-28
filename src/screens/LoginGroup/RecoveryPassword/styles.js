import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.light};
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
`
export const Header = styled.View`
    width: 100%;
    padding-top: 70px;
`
export const TitleContainer = styled.View`
    align-items: center;
`


export const BackButtonContainer = styled.View`
    position: absolute;
`
export const Title = styled.Text`
    font-size:${RFValue(30)}px ;
    font-family: ${(props) => props.theme.fonts.black};
    align-self: center;
    margin-top:60px;
`
export const FormContainer = styled.View`
    flex: 0.5;
    padding-top: 30px;
`
export const Input = styled.TextInput`
    background-color: ${(props) => props.theme.colors.gray};
    width: 100%;
    height: ${RFValue(50)}px;
    margin-top: 20px;
    padding-left: 10px;
    border-radius: 5px;
`
export const ButtonContainer = styled.View`
    position: absolute;
    left: 1px;
    right: 1px;
    bottom: 30px;
`