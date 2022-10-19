import { Button, Container } from "./styles"
import { TextRegular } from '../../../Texts'
import { Entypo } from '@expo/vector-icons';

import theme from "../../../../global/styles/theme";
import { Linking } from "react-native";

const Contact = ({ name, tel }) => {
    return (
        <Container>
            <TextRegular
                text={name}
            />
            <Button
                onPress={() => {
                    console.log('apertou')
                    Linking.openURL(tel)
                }}
            >
                <Entypo name="chevron-with-circle-right" size={40} color={theme.colors.green} />
            </Button>
        </Container>
    )
}

export default Contact