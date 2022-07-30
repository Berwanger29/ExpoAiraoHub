import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize'

export const MainText = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    text-align: justify;

    color: ${props => props.theme.colors.black};
    margin-bottom: 20px;
`