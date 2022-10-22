import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.colors.green};
    width: 90%;
    height: ${RFValue(50)}px;

    border-radius: 5px;
    background-color: ${props => props.isFocused ?  props.theme.colors.semiLight : props.theme.colors.green};

    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`