import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize"

export const ButtonContainer = styled.TouchableOpacity`
    width: ${RFValue(270)}px;
    height: ${RFValue(208)}px;
    margin-right: 20px;
`

export const ImageCard = styled.ImageBackground`
    width: 100%;
    height: 100%;
    flex: 1;
`
export const TitleContainer = styled.View`
    position: absolute;
    bottom: 20;
    left: 20;
`
