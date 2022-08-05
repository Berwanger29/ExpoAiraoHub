import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(221)}px;
    border-radius: 5px;

    margin-bottom: 20px;
`

export const ImageButton = styled.ImageBackground`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const Label = styled.Text`
    font-family: ${props => props.theme.fonts.black};
    font-size: ${RFValue(24)}px;
    color: ${props => props.theme.colors.light};
`