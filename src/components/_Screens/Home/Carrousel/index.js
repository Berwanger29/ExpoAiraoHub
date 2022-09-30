import {
    Container,
    HorizontalView,
    LabelButton,
    NewListButton,
    TitleContainer,
    TopContainer
} from "./styles";

import HomeCard from "../HomeCard";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

import { useNavigation } from '@react-navigation/native'
import { TextSubTitle, TextThin } from "../../../Texts";
import theme from "../../../../global/styles/theme";

export const Carroussel = ({ title, data }) => {

    const navigation = useNavigation()

    return (
        <Container
            horizontal
        >
            <TopContainer>
                <TitleContainer>
                    <TextSubTitle
                        text={title}
                        color={theme.colors.darkGreen}
                    />
                </TitleContainer>
                <NewListButton
                    onPress={() => navigation.navigate('IndividualList', {
                        title,
                        data
                    })}
                >
                    <TextThin
                        text='ver mais'
                    />
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