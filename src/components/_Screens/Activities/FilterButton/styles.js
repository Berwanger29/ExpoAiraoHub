import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`
    width: 110px;
    height: 50px;
    margin: 5px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: 1px solid ${props => props.theme.colors.green};
`