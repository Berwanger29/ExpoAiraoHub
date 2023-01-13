import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.colors.light};
    padding: ${Platform.OS === 'android' ? StatusBar.currentHeight: 0}px 0px 0 0px;
`
export const Header = styled.View`
    margin-bottom: 20px;
    padding: 0px 15px;
`
export const SearchConatainer = styled.View`
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
export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 100%;

    align-items: center;
    justify-content: center;
`

export const Main = styled.View`
    flex:1;
    padding-left: 15px;
    
`

export const CarrousselContainer = styled.ScrollView`
    
`

export const HomeList = styled.FlatList`
    
`