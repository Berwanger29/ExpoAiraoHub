import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.semiLight};
    margin-bottom: 20px;
`