import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize"

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 270px;

    margin-top: 20px;
    margin-bottom: 20px;    
`

export const ImageCard = styled.ImageBackground`
    width: 100%;
    height: 100%;
    flex: 1;
`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color: ${props => props.theme.colors.light};

    position: absolute;
    bottom: 20;
    left: 20;
`