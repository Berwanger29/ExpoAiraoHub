import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.colors.green};
    width: 90%;
    height: ${RFValue(50)}px;

    align-items: center;
    justify-content: center;

    border-radius: 5px;
    align-self: center;
`