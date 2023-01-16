import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar, Platform } from "react-native";

export const Container = styled.View`
    flex: 1;
    padding: ${Platform.OS === 'android' ? StatusBar.currentHeight: 0}px 15px;
`
export const SafeContainer = styled.SafeAreaView`
    flex: 1;
`

export const Header = styled.View`
    margin-bottom: 40px;
    padding-top: 70px;
    align-items: center;
`
export const ContainerBackButton = styled.View`
    position: absolute;
    top: 10px;
    left: 1px;
    
`

export const UserIcon = styled.View`
    background-color: ${(props) => props.theme.colors.semiLight};

    width: ${RFValue(90)}px;
    height: ${RFValue(90)}px;
    border-radius:${RFValue(45)}px;

    align-items: center;
    justify-content: center;
    align-self: center;

    margin-bottom: 30px;
`
export const Main = styled.View`
    
`
export const OptionsContainer = styled.View`

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
    font-family: ${props => props.theme.fonts.light};
    font-size: ${RFValue(14)}px;

    color: red;
`