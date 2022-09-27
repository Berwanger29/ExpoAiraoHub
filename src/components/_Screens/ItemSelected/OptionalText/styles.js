import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`

export const SpaceItem = styled.View`
    margin-left: 4px;
`

export const Dot = styled.View`
    height: 3px;
    width: 3px;
    border-radius: 1.5px;
    margin-left: 10px;
    background-color: ${(props) => props.theme.colors.black};
`