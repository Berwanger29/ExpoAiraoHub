import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
    background-color: ${props => props.theme.colors.light};
`

export const ButtonBackContainer = styled.View`
    position: absolute;
    left: ${RFValue(15)}px;
    top: 5px;
`


export const Header = styled.View`
    width: 100%;
    flex: 0.7;
    align-self: center;
    align-items: center;
    justify-content: center;
`

export const Main = styled.View`
    flex: 1;
`

export const TextContainer = styled.View`
    margin-top: ${RFValue(10)}px;
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