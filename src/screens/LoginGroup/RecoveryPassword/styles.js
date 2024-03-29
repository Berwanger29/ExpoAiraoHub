import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: rgba(255,255,255,0.6);
    padding: ${Platform.OS === 'android' ? StatusBar.currentHeight: 0}px 15px;
`

export const ImageContainer = styled.ImageBackground`
    flex: 1;
`
export const Header = styled.View`
    width: 100%;
    padding-top: 100px;
`
export const TitleContainer = styled.View`
    align-items: center;
`


export const BackButtonContainer = styled.SafeAreaView`
    position: absolute;
`
export const Title = styled.Text`
    font-size:${RFValue(30)}px ;
    font-family: ${(props) => props.theme.fonts.black};
    align-self: center;
    margin-top:60px;
`
export const FormContainer = styled.View`
    flex: 0.5;
    padding-top: 30px;
`
export const Input = styled.TextInput`
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.darkGreen};
    border: 1px solid ${props => props.theme.darkGreen};
    width: 100%;
    height: ${RFValue(50)}px;
    margin-top: 20px;
    padding-left: 10px;
    border-radius: 5px;
`
export const ButtonContainer = styled.View`
    position: absolute;
    left: 1px;
    right: 1px;
    bottom: 30px;
`