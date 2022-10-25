import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    margin-bottom: ${RFValue(20)}px;
`

export const TopContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const TitleContainer = styled.Text`
    padding-bottom: 10px;
`
export const NewListButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    margin-right: 5px;
    align-items: center;
`

export const HorizontalView = styled.FlatList`

`