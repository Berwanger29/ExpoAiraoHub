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
    flex: 0.17;
    align-items: center;
    justify-content: flex-end;
`

export const ContainerBackButton = styled.View`
    position: absolute;
    left: 1px;
    top: 15px;
`
export const Main = styled.View`
    margin-top: 30px;
    flex: 0.83;
`