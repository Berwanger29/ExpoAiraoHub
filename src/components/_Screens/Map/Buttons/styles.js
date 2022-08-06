import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.green};
    height: ${RFValue(55)}px;
    width: ${RFValue(55)}px;
    border-radius: ${RFValue(27.5)}px;

    align-items: center;
    justify-content: center;
    align-items: center;
`
