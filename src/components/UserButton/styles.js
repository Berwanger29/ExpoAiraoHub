import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.colors.semiLight};

    width: ${RFValue(53)}px;
    height: ${RFValue(53)}px;
    border-radius:${RFValue(26.5)}px;

    align-items: center;
    justify-content: center;
`