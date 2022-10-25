import BackButton from "../../../components/BackButton";
import {
    Container,
    ContainerBackButton,
    Header,
    Main,
    Scroll,
} from "./styles";

import { TextRegular, TextSubTitle } from '../../../components/Texts'
import BackgroundImage from "../../../components/BackgroundImage";

const UserAbout = () => {
    return (
        <BackgroundImage
            filter={1}
            image={require('../../../../assets/images/plantBackground.jpg')}
        >
            <Container>
                <ContainerBackButton>
                    <BackButton />
                </ContainerBackButton>
                <Header>
                    <TextSubTitle
                        text='Sobre'
                    />
                </Header>
                <Main>
                    <Scroll>
                        <TextRegular
                            format='justify'
                            text='Este aplicativo foi desenvolvido pela Secretaria Municipal de Infraestutura Empreendedorismo e Turismo de Novo Airão (SEMINTUR) com seus direitos inteclectuais pertencnetes à mesma. Atualmente este aplicativo encontra-se em fase de teste aberto ao público e portanto, é possível que sejam econtradas falhas neste momento de testes.'
                        />
                    </Scroll>
                </Main>
            </Container>
        </BackgroundImage>
    )
}

export default UserAbout