import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
    flex: 1;
`

export const Header = styled.View`
    
`

export const Main = styled.View`
    flex: 1;
    
`

export const ScriptsList = styled.ScrollView`

`