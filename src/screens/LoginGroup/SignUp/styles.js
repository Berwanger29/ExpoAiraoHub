import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.light};
    padding: ${StatusBar.currentHeight + 5}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
    align-items: center;
`
export const TitleContainer = styled.View`
    align-items: center;
    width: 100%;
    padding-top: 80px;
    margin-bottom: 30px;
`

export const BackButtonContainer = styled.View`
    position: absolute;
    top: ${StatusBar.currentHeight + 10}px;
    left: 15px;
`

export const FormContainer = styled.View`
    width: 100%;
    height: 50%;
`
export const Input = styled.TextInput`
    background-color: ${(props) => props.theme.colors.gray};
    width: 100%;
    height: ${RFValue(50)}px;
    margin-bottom: 10px;
    padding-left: 10px;
    border-radius: 5px;
`
export const EyeInputContainer = styled.View`
    width: 100%;
`
export const EyeContainer = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
    top: 10px;

    height: 40px;
    width: 30px;
    align-items: center;
    justify-content: center;
`
export const ButtonContainer = styled.View`
    position: absolute;
    bottom: 15px;
    left: 20px;
    right: 20px;
`