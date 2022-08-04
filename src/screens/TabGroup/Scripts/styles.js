import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex: 1;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
    background-color: ${props => props.theme.colors.light};
`

export const ModalScript = styled.Modal`
    
`

export const ModalContainer = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.4);
    align-items: center;
    justify-content: center;
`

export const ModalContent = styled.View`
    height: 50%;
    width: 85%;
    background-color: white;
    border-radius: 5px;
`

export const CloseModalButton = styled.TouchableOpacity`
    margin: 10px;
    align-self: flex-end;

`

export const Header = styled.View`
    
`

export const Main = styled.View`
    flex: 1;
    
`

export const ScriptsList = styled.ScrollView`

`

