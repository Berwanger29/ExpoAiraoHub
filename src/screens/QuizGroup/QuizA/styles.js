import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex: 1;
    padding: ${Platform.OS === 'android' ? StatusBar.currentHeight: 0}px 15px;
    background-color: ${props => props.theme.colors.light};
`

export const Header = styled.View`
    width: 110%;
    flex: 0.5;
    align-items: center;
    justify-content: center;
    background-color: #76CFE5;
    margin-left: -5%;
`

export const Main = styled.View`
    flex: 1;
    width: 100%;
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
    align-items: center;
    justify-content: center;
    align-self: center;

    width:${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 5px;
    
    position: absolute;
    bottom: ${Platform.OS === 'android'? 0 : 30}px;
`