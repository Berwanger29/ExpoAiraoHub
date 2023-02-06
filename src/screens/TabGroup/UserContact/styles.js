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
`

export const Header = styled.View`
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    padding:0px 15px;

`
export const ContainerBackButton = styled.View`
    align-self: flex-start;
    margin-bottom: 10px;
`

export const Main = styled.View`
    flex: 1;
`

export const Scroll = styled.ScrollView`
    margin-bottom: 20px;
    padding: 7px;
`