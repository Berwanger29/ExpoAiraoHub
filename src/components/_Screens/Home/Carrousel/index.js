import {
    Container,
    HorizontalView,
    Title,
    TopContainer
} from "./styles";

import HomeCard from "../HomeCard";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { useEffect } from "react";

export const Carroussel = ({ children, title, data }) => {

    return (
        <Container
            horizontal
        >
            <TopContainer>
                <Title>
                    {title}
                </Title>

                <MaterialCommunityIcons name="arrow-right-thin" size={RFValue(18)} color="black" />
            </TopContainer>


            <HorizontalView
                data={data}
                renderItem={({ item }) => (
                    <HomeCard
                        id={item.id}
                        title={item.title}
                        image={item.content.image}
                    />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            />

        </Container>
    )
}

export default Carroussel