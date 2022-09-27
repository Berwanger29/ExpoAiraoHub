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
    justify-content: center;
`
export const TitleContainer = styled.View`
    padding-top: 20px;
    align-self: center;
`

export const Main = styled.View`
    flex: 1;
    margin-top: 30px;
`

export const Scroll = styled.ScrollView`
    margin-bottom: 20px;
`