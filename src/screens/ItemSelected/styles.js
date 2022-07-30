import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${props => props.theme.colors.light};
    padding-top:${StatusBar.currentHeight}px ;

    /* padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px; */
`
export const ImageContainer = styled.View`
    width: 100%;
    height: ${RFValue(300)}px;

    background-color: red;
`
export const Image = styled.Image`
    width: 100%;
    height: 100%;
`
export const TextContentContainer = styled.View`
    padding: ${RFValue(25)}px ${RFValue(15)}px ${RFValue(25)}px ${RFValue(15)}px;
    align-items: center;
`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.black};
    font-size: ${RFValue(22)}px;
`

export const Line = styled.View`
    height: 1px;
    width: 80%;
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
    margin: 20px 0px;
`

export const MainText = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`