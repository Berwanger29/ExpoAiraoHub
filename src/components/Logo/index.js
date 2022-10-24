import {
    LogoContainer,
    LogoImage
} from "./styles"

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage
                source={require('../../../assets/images/LogoHomeScreen.png')}
                resizeMode='contain'
            />
        </LogoContainer>
    )
}

export default Logo