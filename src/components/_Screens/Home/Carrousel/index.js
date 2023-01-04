import { useState, useEffect } from "react";
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

import * as pt from "../../../../utils/pt";
import * as en from "../../../../utils/en";


export const Carroussel = ({ title, data }) => {

    const portuguese = pt.labels
    const english = en.labels
    const [selectedLanguage, setSelectedLanguage] = useState('pt')
    const [language, setLanguage] = useState(portuguese)

    function handleLanguage() {
        if (selectedLanguage === 'pt') {
            setLanguage(portuguese)
        } else if (selectedLanguage === 'en') {
            setLanguage(english)
        }
    }
    useEffect(() => {
        handleLanguage()
    }, [])

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
                        text={language.home.mais}
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