import { Title } from "./styles";

const TextTitle = ({ text, color }) => {
    return (
        <Title
            color={color}
        >
            {text}
        </Title>
    )
}

export default TextTitle