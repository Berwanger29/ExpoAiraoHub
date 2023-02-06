import styled from "styled-components/native";


export const Container = styled.ScrollView`
    flex: 1;
    padding: 10px 15px;
`

export const Header = styled.View`
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 120px;
`

export const ContainerBackButton = styled.View`
    position: absolute;
    top: 10px;
    left: 5px;
`

export const TextContainer = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`

export const Main = styled.View`
    padding-bottom: 50px;
    padding: 5px 5px 40px 5px;
`
export const IconsContainer = styled.View`
    align-items: center;
    
`

export const IconButton = styled.TouchableOpacity`
    background-color: white;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding:20px;
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 5px;
    margin-bottom: 15px;
`
export const ImageIcon = styled.Image`
    width: 100%;
    height: 70px;
    padding: 50px;
    
`