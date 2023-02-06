import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
    flex: 1;
    padding: 10px 15px;
    align-items: center;
    `
export const SafeContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${props => props.theme.colors.light};
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
    padding: 7px;
`