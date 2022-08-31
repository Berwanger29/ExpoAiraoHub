import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px ;
    background-color: ${props => props.theme.colors.light};
    align-items: center;
`

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`
export const ContainerBackButton = styled.View`
    position: absolute;
    top: 30px;
    left: 15px;
`

export const Main = styled.View`
    flex: 1;
`

export const AboutTitle = styled.Text`
     font-family: ${(props) => props.theme.fonts.bold};
     font-size: ${RFValue(28)}px;
     color: ${(props) => props.theme.colors.black};
     margin: 10px 0px 15px 0px;
`

export const Scroll = styled.ScrollView`
    margin-bottom: 20px;
`
export const Text = styled.Text`
    text-align: justify;
    padding: 10px;
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${(props) => props.theme.colors.black};
`