import styled from "styled-components/native";

export const Background = styled.ImageBackground`
    flex: 1;
`
export const Filter = styled.View`
    flex: 1;
    background-color:${props => props.filter ? `rgba(255,255,255,0.5)` : `rgba(255,255,255,${props.filter})`};
`
