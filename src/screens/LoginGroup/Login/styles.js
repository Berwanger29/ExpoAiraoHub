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

export const LogoContainer = styled.View`
    height: 30%;
    width: 100%;

    align-items: center;
    justify-content: center;
`

export const Logo = styled.Image`
    width: 100%;
    height: 100%;
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

    border: 1px solid ${props => props.theme.darkGreen};

    width: 100%;
    height: ${RFValue(50)}px;
    
    margin-bottom: 20px;
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