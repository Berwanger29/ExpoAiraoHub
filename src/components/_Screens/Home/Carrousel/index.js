import {
    Container,
    HorizontalView,
    LabelButton,
    NewListButton,
    Title,
    TopContainer
} from "./styles";

import HomeCard from "../HomeCard";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

import { useNavigation } from '@react-navigation/native'

export const Carroussel = ({ title, data }) => {

    const navigation = useNavigation()

    return (
        <Container
            horizontal
        >
            <TopContainer>
                <Title>
                    {title}
                </Title>

                <NewListButton
                    onPress={() => navigation.navigate('IndividualList',{
                        title,
                        data
                    })}
                >
                    <LabelButton>
                        ver mais
                    </LabelButton>
                    <MaterialCommunityIcons name="arrow-right-thin" size={RFValue(18)} color="black" />
                </NewListButton>
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