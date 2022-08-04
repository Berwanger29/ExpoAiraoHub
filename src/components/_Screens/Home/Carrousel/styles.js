import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    margin-bottom: ${RFValue(20)}px;
`

export const TopContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.black};
    font-size: ${RFValue(22)}px;

    color: ${props => props.theme.colors.darkGreen};

    margin: ${17}px 0px;
`


export const HorizontalView = styled.FlatList`

`