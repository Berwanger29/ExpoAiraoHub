import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const ImageContainer = styled.ImageBackground`
    flex: 1;
`

export const Container = styled.View`
    flex: 1;
    background-color: rgba(255,255,255,0.6);
    align-items: center;
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
    
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
    background-color: ${props => props.theme.colors.light};
    color: ${(props) => props.theme.colors.darkGreen};

    border: 2px solid ${props => props.theme.colors.green};

    width: 100%;
    height: ${RFValue(50)}px;
    padding-left: 20px;
    border-radius: 8px;

`
export const EyeInputContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: ${RFValue(50)}px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const EyeContainer = styled.TouchableOpacity`
    position: absolute;
    right: 0px;
    margin-right: 12px;
`

export const RecoveryContainer = styled.View`
    margin-bottom:20px;
    flex-direction: row;
`

export const SignUpContainer = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 30px;
`

export const ButtonText = styled.TouchableOpacity`

`

export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`