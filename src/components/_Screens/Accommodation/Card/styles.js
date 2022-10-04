import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    margin-bottom: 40px;
`
export const Image = styled.Image`
    height: ${RFValue(221)}px;
    width: 100%;
    border-radius: 20px;
`
export const TextContainer = styled.View`
    margin-top: 7px;
    margin-left: 1px;
`