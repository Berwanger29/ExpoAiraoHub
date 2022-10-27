import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { StatusBar } from 'react-native'
import theme from '../../../global/styles/theme'

export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
    background-color: ${props => props.theme.colors.light};
`

export const Header = styled.View`

`

export const HeroContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`

export const FIlterButton = styled.TouchableOpacity`
    margin-right: 10px;
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

export const MainList = styled.FlatList`
    flex: 1;
`

export const Modal = styled.Modal`

`
export const ModalContiner = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.6);
    align-items: center;
    justify-content: center;
`
export const FilterContainer = styled.View`
    background-color: ${props => props.theme.colors.light};
    flex: 0.8;
    width: 90%;
    border-radius: 15px;
    overflow: hidden;
    padding: 10px;
`

export const FilterHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const CloseModalButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
`
export const Details = styled.View`
    margin-top: 15px;
`
export const FilterOptions = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-around;
`

export const FilterButton = styled.TouchableOpacity`
    width: 110px;
    height: 50px;
    margin: 5px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: 1px solid ${props => props.theme.colors.green};
    background-color: ${props => props.isSelected ? theme.colors.darkGreen : theme.colors.yellow};
`