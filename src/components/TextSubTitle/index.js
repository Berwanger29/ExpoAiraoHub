import { Title } from "./styles";

const TextSubTitle = ({ text, color }) => {
    return (
        <Title
            color={color}
        >
            {text}
        </Title>
    )
}

export default TextSubTitle