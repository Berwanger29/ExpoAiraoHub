import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px ;
    background-color: ${props => props.theme.colors.light};
`

export const Header = styled.View`

`
export const ButtonsContainer = styled.View`
    height: ${RFValue(60)}px;

    flex-direction: row;
    justify-content: space-around;
`

export const ButtonsList = styled.ScrollView`
    flex-direction: row;
`

export const Main = styled.ScrollView`
    flex: 1;
    margin-top: 20px;
`
