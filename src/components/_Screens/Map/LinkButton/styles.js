import styled from "styled-components/native";

export const MapLinkContainer = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    flex-direction: row;
    background-color: ${props => props.theme.colors.green};
    border-radius: 50px;
    padding: 15px 30px ;
    justify-content: space-between;
    margin-top: 20px;
`