import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    flex-direction: row;
    height: ${RFValue(40)}px;
    align-items: flex-start;
    background-color: ${props => props.theme.colors.light};
    border-radius: 6px;
`

export const Input = styled.TextInput`
    width: 85%;
    height: 100%;

    padding-left: 10px;
`

export const SearchButton = styled.View`
    width: 15%;
    height: 100%;

    align-items: center;
    justify-content: center;
`