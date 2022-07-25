import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
`

export const Header = styled.View`

`

export const Main = styled.View`
    flex: 1;
    margin-top: ${RFValue(50)}px;
`

export const List = styled.FlatList`

`