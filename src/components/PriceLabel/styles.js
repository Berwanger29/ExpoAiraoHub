import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`

export const PriceText = styled.Text`
    font-family: ${props => props.theme.fonts.bold};
    font-size: ${RFValue(12)}px;
    color: ${props => props.theme.colors.black};
    margin-right: 4px;
`

export const LabelText = styled.Text`
    font-family: ${props => props.theme.fonts.light};
    font-size: ${RFValue(12)}px;
    color: ${props => props.theme.colors.black};	
`