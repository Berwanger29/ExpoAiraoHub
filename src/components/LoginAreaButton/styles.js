import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.TouchableOpacity`
    margin-bottom: 10px;

    background-color: ${(props) => props.theme.colors.green};
    width: 90%;
    height: ${RFValue(50)}px;

    align-items: center;
    justify-content: center;

    border-radius: 8px;
    align-self: center;
`