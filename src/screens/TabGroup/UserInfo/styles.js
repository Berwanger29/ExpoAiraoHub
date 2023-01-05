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
    flex: 0.17;
    align-items: center;
    justify-content: flex-end;
`

export const ContainerBackButton = styled.View`
    position: absolute;
    left: 1px;
    top: 10px;
`
export const Main = styled.View`
    margin-top: 30px;
    flex: 0.83;
    width: 100%;

`
export const ButtonLanguage = styled.TouchableOpacity`
    border-radius: 5px;
    width: 40px;
    height: 30px;

    align-self: center;
    margin-top: 30px;
`
export const CountryFlag = styled.Image`
    width: 100%;
    height: 100%;
`