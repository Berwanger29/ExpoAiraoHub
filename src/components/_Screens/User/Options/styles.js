import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    
    flex-direction: row;
    justify-content: space-between;
`

export const SubContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Circle = styled.View`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    border-width: 1px;
    border-color: black;
    align-items: center;
    justify-content: center;
`

export const TextOption = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${(props) => props.theme.fonts.regular};
    margin-left: 6px;
`

export const Button = styled.TouchableOpacity`
    
`

export const Line = styled.View`
    height: 1px;
    width: 90%;
    background-color: gray;
    border-radius: 5px;
    
    margin-top: 10px;
    margin-bottom: 10px;
`