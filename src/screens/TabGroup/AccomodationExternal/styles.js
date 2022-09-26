import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.light};
    padding: ${StatusBar.currentHeight}px ${RFValue(15)}px ${RFValue(20)}px ${RFValue(15)}px;
`
export const Header = styled.View`
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 15%;
    padding-bottom: 10px;
`

export const ContainerBackButton = styled.View`
    position: absolute;
    top: 10px;
    left: 5px;
`
export const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: ${RFValue(22)}px;
    color: ${(props) => props.theme.colors.green};
`

export const Text = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    text-align: justify;
`
export const TextContainer = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`

export const Main = styled.View`
    
    flex: 1;
`
export const IconsContainer = styled.View`
    flex: 0.6;
`

export const IconButton = styled.TouchableOpacity`
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`
export const ImageIcon = styled.Image`
    width: 100%;
    height: 70px;
    padding: 50px;
    
`