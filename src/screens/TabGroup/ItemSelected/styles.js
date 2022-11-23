import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: white;
`

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    background-color: ${props => props.theme.colors.semiLight};
    
`

export const ImageContainer = styled.View`
    width: 100%;
    height: ${RFValue(300) + StatusBar.currentHeight}px;
`

export const ContainerBackButton = styled.View`
    position: absolute;
    top: ${StatusBar.currentHeight + 1}px;
    left: 15px;
`

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`
export const TextContentContainer = styled.View`
    padding: ${RFValue(25)}px ${RFValue(15)}px ${RFValue(25)}px ${RFValue(15)}px;
    align-items: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: ${props => props.theme.colors.semiLight};
    margin-top: -30px;
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
`

export const LinkButton = styled.View`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
`
export const FontButton = styled.TouchableOpacity`
    margin-top: 10px;
    border-bottom-color: black;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    align-self: flex-start;
`