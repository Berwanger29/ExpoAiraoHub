import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.colors.green};
    width: 60%;
    height: ${RFValue(50)}px;

    align-items: center;
    justify-content: center;

    border-radius: 5px;
    align-self: center;
`

export const Label = styled.Text`
    color: ${(props) => props.theme.colors.light};
    font-family: ${(props) => props.theme.fonts.regular};
`