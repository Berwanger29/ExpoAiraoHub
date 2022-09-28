import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { StatusBar } from 'react-native'

export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
    background-color: ${props => props.theme.colors.light};
`

export const Header = styled.View`

`

export const Main = styled.View`
    flex: 1;
    padding-top: 10px;
`

export const ContainerSearch = styled.View`
    flex-direction: row;
    height: ${RFValue(40)}px;
    align-items: flex-start;
    background-color: ${props => props.theme.colors.light};
    border-radius: 6px;
    margin-top: 25px;
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

export const SearchList = styled.FlatList`
    flex: 1;
`