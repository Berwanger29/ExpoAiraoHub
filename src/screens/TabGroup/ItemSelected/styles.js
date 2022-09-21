import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
`

export const ScrollContainer = styled.ScrollView`
flex: 1;
background-color: ${props => props.theme.colors.light};
padding-top:${StatusBar.currentHeight}px;

`

export const ImageContainer = styled.View`
    width: 100%;
    height: ${RFValue(300)}px;
`

export const ContainerBackButton = styled.View`
    position: absolute;
    top: 20px;
    left: 15px;
`

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`
export const TextContentContainer = styled.View`
    padding: ${RFValue(25)}px ${RFValue(15)}px ${RFValue(25)}px ${RFValue(15)}px;
    align-items: center;
`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.black};
    font-size: ${RFValue(22)}px;
`

export const Line = styled.View`
    height: 1px;
    width: 80%;
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
    margin: 20px 0px;
`

export const MainText = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    text-align: justify;
`

export const OptionalsContainer = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const ContainerLinks = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
`

export const LinkButton = styled.View`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
`