import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding: 15px;
    background-color: ${(props) => props.theme.colors.green};

    flex-direction: row-reverse;

    padding: 5px;
`

export const ContactButton = styled.TouchableOpacity`
    padding: 10px;
    background-color: ${(props) => props.theme.colors.semiLight};  
    align-items: center ;

    border-radius: 5px;
`

export const ContacText = styled.Text`
    font-family: ${(props) => props.theme.fonts.black};
    font-size: ${RFValue(20)}px;
    color: ${(props) => props.theme.colors.green};
`