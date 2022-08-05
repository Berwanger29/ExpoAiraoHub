import {
    ButtonContainer,
    ImageCard,
    Title
} from './styles'

import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const HomeCard = ({ id, title, image }) => {

    const navigation = useNavigation()

    function navigateTo(id) {
        navigation.navigate('ItemSelected', {
            itemId: id
        })
    }

    return (
        <ButtonContainer
            activeOpacity={0.7}
            onPress={() => navigateTo(id)}
        >
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
        </ButtonContainer >
    )
}

export default HomeCard