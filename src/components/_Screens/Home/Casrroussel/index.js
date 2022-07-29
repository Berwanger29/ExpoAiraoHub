import {
    Container,
    HorizontalView,
    Title,
    TopContainer
} from "./styles";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Carroussel = ({ children, title }) => {
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
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {children}
            </HorizontalView>
        </Container>
    )
}

export default Carroussel