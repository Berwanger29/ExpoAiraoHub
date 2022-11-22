import {
    LogoContainer,
    LogoImage
} from "./styles"

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage
                source={require('../../../assets/images/LogoA.png')}
                resizeMode='contain'
            />
        </LogoContainer>
    )
}

export default Logo