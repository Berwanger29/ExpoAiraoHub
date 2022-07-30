import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    width: ${RFValue(270)}px;
    height: ${RFValue(208)}px;
    background-color: green;
    border-radius: 5px;

    margin-right: ${RFValue(20)}px;
`

export const Shadow = styled.View`
    background-color: rgba(0,0,0,0.1);
    width:100%;
    height:100%;
    border-radius: 5px;
`

export const Image = styled.ImageBackground`
    width: 100%;
    height: 100%;
`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${RFValue(16)}px;

    color: ${props => props.theme.colors.light};

    position: absolute;
    bottom: ${RFValue(30)}px;
    left: ${RFValue(10)}px;
`