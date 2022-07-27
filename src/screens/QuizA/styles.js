import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
    background-color: ${props => props.theme.colors.light};
`

export const Header = styled.View`
    flex: 0.25;
    background-color: blue;
    align-items: center;
    padding-left: ${RFPercentage(5)}px;
`

export const Main = styled.View`
    align-items: center;
`

export const Button = styled.TouchableOpacity`

`