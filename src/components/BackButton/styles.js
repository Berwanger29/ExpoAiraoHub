import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.colors.light};

    height: ${RFValue(50)}px;
    width: ${RFValue(50)}px;
    border-radius: ${RFValue(25)}px;

    align-items: center;
    justify-content: center;
`