import {
    Container,
    LabelOption
} from './styles'

const SelectButton = ({ text }) => {
    return (
        <Container>
            <LabelOption>
                {text}
            </LabelOption>
        </Container>
    )
}

export default SelectButton