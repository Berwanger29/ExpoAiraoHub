import { Button, Container } from "./styles"
import { TextRegular } from '../../../Texts'
import { Entypo } from '@expo/vector-icons';

import theme from "../../../../global/styles/theme";
import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Contact = ({ name, link }) => {

    const navigation = useNavigation()

    return (
        <Container>
            <TextRegular
                text={name}
            />
            <Button
                onPress={() => {
                    if (link.includes('tel')) {
                        Linking.openURL(link)
                    } else {
                        console.log(Number(link))
                        navigation.navigate('ItemSelected', {
                            itemId: Number(link)
                        })
                    }
                }}
            >
                <Entypo name="chevron-with-circle-right" size={40} color={theme.colors.green} />
            </Button>
        </Container>
    )
}
export default Contact