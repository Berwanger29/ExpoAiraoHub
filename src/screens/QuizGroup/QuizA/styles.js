import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
    background-color: ${props => props.theme.colors.light};
`

export const Header = styled.View`
    width: 110%;
    height: ${RFPercentage(35)}px;

    background-color: #76CFE5;
    align-items: center;
    padding-left: ${RFPercentage(5)}px;
    margin-left: -5%;
`

export const Main = styled.View`
    
`

export const TextContainer = styled.View`
    margin-top: ${RFValue(10)}px;
`

export const LabelCountText = styled.Text`
    font-family: ${props => props.theme.fonts.light};
    font-size:${RFValue(14)}px;

    color: ${props => props.theme.colors.black};
`

export const QuestionText = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size:${RFValue(18)}px;

    color: ${props => props.theme.colors.black};
    margin: ${RFValue(10)}px 0px;
`

export const ButtonsContainer = styled.View`
    align-items: center;
    margin-top: ${RFValue(35)}px;
`

export const Button = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.semiLight};

    align-self: center;
    align-items: center;
    justify-content: center;

    margin-top: 20px;

    width:${RFValue(50)}px;
    height: ${RFValue(50)}px;

    border-radius: 5px;
`