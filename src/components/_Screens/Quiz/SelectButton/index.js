import {
    Container,
    LabelOption
} from './styles'

const SelectButton = ({ text }) => {
    return (
        <Container
            activeOpacity={0.7}
        >
            <LabelOption>
                {text}
            </LabelOption>
        </Container>
    )
}

export default SelectButton