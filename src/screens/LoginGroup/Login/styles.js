import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.light};
    align-items: center;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
`

export const TitleContainer = styled.View`
    height: 30%;
    width: 100%;

    align-items: center;
    justify-content: center;
`

export const LabelContainer = styled.View`
    align-self: flex-start;
    margin-bottom: 10px;
`
export const InputContainer = styled.View`
    width: 100%;
    height: 50%;
    align-items: center;
`


export const UserInput = styled.TextInput`
    background-color: gray;
    
    width: 100%;
    height: ${RFValue(50)}px;
    
    margin-bottom: 20px;
    padding-left: 10px;
    border-radius: 5px;

    color: ${(props) => props.theme.colors.light};
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

export const RecoveryContainer = styled.View`
    margin-top: -10px;
    margin-bottom: 15px;
    flex-direction: row;
`

export const SignUpContainer = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 11px;
`

export const ButtonText = styled.TouchableOpacity`

`

export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`