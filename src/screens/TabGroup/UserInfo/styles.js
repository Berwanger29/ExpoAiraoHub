import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px ;
    background-color: ${props => props.theme.colors.light};
    align-items: center;

    justify-content: center;
`

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`
export const ContainerBackButton = styled.View`
    position: absolute;
    top: 30px;
    left: 15px;
`

export const UserProfile = styled.Text`

`