import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.semiLight};
    margin-bottom: 20px;
`

export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${(props) => props.theme.colors.darkGreen};
`