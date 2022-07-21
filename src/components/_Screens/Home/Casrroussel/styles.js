import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    
`

export const HorizontalView = styled.ScrollView`

`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.black};
    font-size: ${RFValue(22)}px;

    color: ${props => props.theme.colors.darkGreen};

    margin: ${17}px 0px;
`