import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
    flex: 1;
    padding: 10px 15px ;
    `
export const  SafeContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${props => props.theme.colors.light};
`

export const Header = styled.View`
    margin-bottom: 20px;
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
