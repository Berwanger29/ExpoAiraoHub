import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    width: 100%;
    max-width: ${RFValue(400)}px;
    height: ${RFValue(208)}px;
    
    margin-bottom: ${RFValue(20)}px;
    border-radius: 5px;
`
export const ImageBackground = styled.ImageBackground`
    flex: 1;
`

export const ShadowFilter = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.4);
    align-items: center;
    justify-content: center;

    border-radius: 5px;
`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.black};
    font-size: ${RFValue(20)}px;

    color: ${props => props.theme.colors.light};
`