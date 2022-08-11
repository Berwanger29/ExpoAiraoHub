import {
    Container,
    LabelOption
} from './styles'

const SelectButton = ({ text, onPress, changeColor }) => {
    return (
        <Container
            activeOpacity={0.7}
            onPress={onPress}
            isFocused={changeColor}
        >
            <LabelOption>
                {text}
            </LabelOption>
        </Container>
    )
}

export default SelectButton