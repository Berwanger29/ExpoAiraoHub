import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex: 1;
    padding: 10px 15px;
    background-color: ${props => props.theme.colors.light};
`

export const Header = styled.View`
    flex: 0.5;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const ButtonBackContainer = styled.View`
    position: absolute;
    left: 5px;
    top: 0;
`

export const Main = styled.View`
    flex: 1;
`

export const TextContainer = styled.View`
    margin-top: ${RFValue(10)}px;
`

export const ButtonsContainer = styled.View`
    align-items: center;
    margin-top: ${RFValue(35)}px;
`

export const Button = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.semiLight};
    align-items: center;
    justify-content: center;
    align-self: center;

    width:${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 5px;
    
    position: absolute;
    bottom: 40px;
`