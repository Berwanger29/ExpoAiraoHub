import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.light};
    align-items: center;
    justify-content: center;
`

export const Label = styled.Text`
    
`

export const List = styled.FlatList`
    width: 100%;
`