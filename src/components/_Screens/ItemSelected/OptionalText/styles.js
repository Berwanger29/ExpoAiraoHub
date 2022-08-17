import styled from "styled-components/native";

export const OptionsText = styled.Text`
    margin-right: 8px;
`
export const Dot = styled.View`
    height: 3px;
    width: 3px;
    border-radius: 1.5px;

    margin-right: 3px;

    background-color: ${(props)=> props.theme.colors.black};
`