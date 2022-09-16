import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.light};
    padding: ${StatusBar.currentHeight}px 15px 20px 15px;
`

export const ContainerBackButton = styled.View`
    position: absolute;
    top: 45px;
    left: 15px;
`
export const Header = styled.View`
    padding-top: 70px;
`
export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.black};
    font-size: ${RFValue(24)}px;
    color: ${(props) => props.theme.colors.darkGreen};
`
export const SearchConatainer = styled.View`
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

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 100%;

    align-items: center;
    justify-content: center;
`

export const Main = styled.View`
    flex: 1;
    margin-top: ${RFValue(40)}px;
`

export const List = styled.FlatList`

`
