import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    margin-bottom: 40px;
`
export const Image = styled.Image`
    height: ${RFValue(221)}px;
    width: 100%;

    margin-bottom: 20px;

    border-radius: 5px;
    background-color: blue;
`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size:  ${RFValue(18)}px;

    color: ${props => props.theme.colors.darkGreen};
`

export const IsOpen = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px 0px;
`

export const IsOpenDot = styled.View`
    width: ${RFValue(5)}px;
    height: ${RFValue(5)}px;
    border-radius: ${RFValue(2.5)}px;

    background-color: ${props => props.isOpen ? "green" : "red"};

    margin-right: 5px;
`

export const IsOpenText = styled.Text`
    font-family: ${props => props.theme.fonts.light};
    color: ${props => props.theme.colors.black};
`

export const PriceContainer = styled.View`
    flex-direction: row;
`
export const PriceText = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${props => props.theme.colors.black};
`
export const PricePeriod = styled.Text`
    font-family: ${props => props.theme.fonts.light};
    font-size: ${RFValue(14)}px;
    color: ${props => props.theme.colors.black};
`