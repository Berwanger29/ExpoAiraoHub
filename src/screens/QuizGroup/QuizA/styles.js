import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px 15px 20px 15px;
    background-color: ${props => props.theme.colors.light};
`

export const Header = styled.View`
    width: 110%;
    flex: 1;

    background-color: #76CFE5;
    align-items: center;
    padding-left: ${RFPercentage(5)}px;
    margin-left: -5%;
`

export const Main = styled.View`
    
`

export const TextContainer = styled.View`
    margin-top: ${RFValue(10)}px;
    justify-content: space-between;
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