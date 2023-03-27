import { Container } from "./styles";

import { TextRegular } from "../Texts";
import AnimatedLottieView from "lottie-react-native";

import animation from '../../../assets/animations/notFound.json'
import theme from "../../global/styles/theme";


export function NotFound({ label }) {
    return (
        <Container>
            <AnimatedLottieView
                source={animation}
                loop={true}
                autoPlay={true}
                style={{
                    width: '90%'
                }}
            />
            <TextRegular
                text={label}
                color={theme.colors.black}
            />
        </Container>
    )
}