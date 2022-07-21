import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.light};
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
    align-items: center;
    justify-content: space-between;
`
export const TitleContainer = styled.View`
    height: 25%;
    width: 100%;
`

export const BackButtonContainer = styled.View`
    align-self: flex-start;
`

export const Title = styled.Text`
    font-size:${RFValue(30)}px ;
    font-family: ${(props) => props.theme.fonts.black};
    align-self: center;
    margin-top: 20px;
`
export const FormContainer = styled.View`
    width: 100%;
    height: 50%;
`
