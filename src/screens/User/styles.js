import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.light};
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
`

export const Header = styled.View`
        margin-bottom: 40px;
`

export const UserIcon = styled.View`
    background-color: ${(props) => props.theme.colors.semiLight};

    width: ${RFValue(90)}px;
    height: ${RFValue(90)}px;
    border-radius:${RFValue(45)}px;

    align-items: center;
    justify-content: center;
    align-self: center;


`

export const Main = styled.View`
    
`

export const Footer = styled.View`
    align-self: center;
    align-items: center;
    position: absolute;
    bottom: 5%;
    

    width: 100%;
`

export const LogoutButton = styled.TouchableOpacity`
    width: ${RFValue(70)}px;
`
export const LogOutText = styled.Text`
    font-family: ${props => props.theme.fonts.thin};
    font-size: ${RFValue(14)}px;

    color: red;
`