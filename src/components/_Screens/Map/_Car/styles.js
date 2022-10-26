import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`

`

export const TextContent = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${props => props.theme.fonts.bold};
    color:${props => props.theme.colors.light};
    margin-left: 10px;
`

export const MapLinkContainer = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    flex-direction: row;
    background-color: ${props => props.theme.colors.green};
    border-radius: 50px;
    padding: 15px 30px ;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const MapButton = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.colors.green};
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(25)}px;
`