import {
    Container,
    TextOption,
    Line,
    Circle,
    SubContainer,
    Button
} from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Options = ({ text, nameIcon, onPress }) => {
    return (
        <>
            <Container
                activeOpacity={0.6}
                onPress={onPress}
            >
                <SubContainer>
                    <Circle>
                        <MaterialCommunityIcons name={nameIcon} size={20} color="black" />
                    </Circle>
                    <TextOption>
                        {text}
                    </TextOption>
                </SubContainer>
                <Button
                    activeOpacity={0.6}
                >
                    <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
                </Button>
            </Container>
            <Line />
        </>
    )
}

export default Options