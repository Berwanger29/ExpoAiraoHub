import {
    Container,
    ImageCard,
    Title
} from './styles'

import { LinearGradient } from 'expo-linear-gradient'


const HomeCard = ({ id, title, image }) => {
    return (
        <Container>
            <ImageCard
                source={image}
                imageStyle={{ borderRadius: 5 }}
            >
                <LinearGradient
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']}
                    locations={[0.2, 1]}
                    style={{ borderRadius: 5, flex: 1, justifyContent: 'center' }}
                >
                    <Title>
                        {title}
                    </Title>
                </LinearGradient>
            </ImageCard>
        </Container >
    )
}

export default HomeCard