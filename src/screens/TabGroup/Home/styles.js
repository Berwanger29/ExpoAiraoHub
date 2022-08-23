import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.light};
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
`
export const Header = styled.View`
    margin-bottom: 20px;
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

export const Greetings = styled.Text`
    font-family: ${(props) => props.theme.fonts.black};
    font-size: ${RFValue(26)}px;
    margin-top: 10px;
    margin-bottom: 25px;
`

export const Main = styled.View`
    flex:1; 
`

export const CarrousselContainer = styled.ScrollView`
    margin-bottom: ${RFValue(10)}px;
`

export const HomeList = styled.FlatList`
    
`