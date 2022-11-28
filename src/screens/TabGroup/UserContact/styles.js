import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px ;
    align-items: center;
`

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 25px;

`
export const ContainerBackButton = styled.View`
    position: absolute;
    top: 45px;
    left: 15px;
`

export const Main = styled.View`
    flex: 1;
`

export const Scroll = styled.ScrollView`
    margin-bottom: 20px;
    padding: 7px;
`