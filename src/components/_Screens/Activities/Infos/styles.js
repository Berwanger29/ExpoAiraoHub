import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    align-items: center;
`

export const DetailsGroup = styled.View`
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
`

export const ContactsGroup = styled.View`
    width: 100%;
    padding: 1px 1px;
`
export const IconCircle = styled.View`
    height: 70px;
    width: 70px;
    border-radius: 35px;
    background-color: ${props => props.theme.colors.semiLight};
    border: 3px solid ${props => props.theme.colors.green};
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
`

export const InfoContainer = styled.View`
    flex-direction: column;
    align-items: center;
`