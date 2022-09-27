import {
    Container,
    Dot, SpaceItem
} from './styles'
import { TextThin } from '../../../Texts'

const OptionalText = ({ text }) => {
    return (
        <>
            <Container>
                <Dot />
                <SpaceItem>
                    <TextThin
                        text={text}
                    />
                </SpaceItem>
            </Container>
        </>
    )
}

export default OptionalText