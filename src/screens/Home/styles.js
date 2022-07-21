import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.light};
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
`
export const Header = styled.View`

`
export const Greetings = styled.Text`
    font-family: ${(props) => props.theme.fonts.black};
    font-size: ${RFValue(26)}px;
    margin-top: 10px;
    margin-bottom: 25px;
`

export const Main = styled.View`
    flex:1;
    border-bottom-color:red ;
    border-bottom-width:1px ;

    margin-top: 10px;
`

export const CarrousselContainer = styled.ScrollView`
    margin-bottom: ${RFValue(10)}px;
`