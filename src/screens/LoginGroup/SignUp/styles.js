import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: rgba(255,255,255,0.6);
    padding: ${StatusBar.currentHeight + 5}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
    align-items: center;
`

export const ImageContainer = styled.ImageBackground`
    flex: 1;
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
`
export const Input = styled.TextInput`
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.darkGreen};
    border: 1px solid ${props => props.theme.darkGreen};
    width: 100%;
    height: ${RFValue(50)}px;
    margin-bottom: 10px;
    padding-left: 10px;
    border-radius: 5px;
`
export const EyeInputContainer = styled.View`
    width: 100%;
    flex-direction: row;
`
export const EyeContainer = styled.TouchableOpacity`
    position: absolute;
    right: 7px;

    height: 80%;
    width: 30px;
    align-items: center;
    justify-content: center;
`
export const ButtonContainer = styled.View`
    position: absolute;
    bottom: 30px;
    left: 20px;
    right: 20px;
`
export const PrivacyContainer = styled.View`
    width: 100%;
    padding: 2px;
    flex-direction: row;
    align-items: center;
`

export const CheckBox = styled.TouchableOpacity`
    background-color: ${(props) => props.isConfirmed ? 'blue' : 'white'};
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    border-radius: 3px;
    border: 1px solid ${(props) => { props.theme.colors.black }};
`

export const Modal = styled.Modal`

`

export const ModalContainer = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.4);
    align-items: center;
    justify-content: center;
`

export const ModalHeader = styled.View`
    width: 100%;
    flex-direction: row-reverse;
    padding: 10px;
`
export const CloseModalButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
`

export const ModalContent = styled.View`
    height: 90%;
    width: 95%;
    background-color: ${props => props.theme.colors.light};
    border-radius: 15px;
    align-items: center;
`
export const PrivacyText = styled.ScrollView`
    margin: 5px 0px; 
    padding: 0px 10px;
    width: 100%;
`