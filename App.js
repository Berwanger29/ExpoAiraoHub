import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';
import { ActivityIndicator } from 'react-native';

import Navigation from './src/Navigation';

import theme from './src/global/styles/theme';
import AuthProvider from './src/contexts/auth';

import { LogBox } from 'react-native';



LogBox.ignoreAllLogs()


export default function App() {



  let [fontsLoaded, error] = useFonts({
    'ExtraBold': require('./assets/fonts/Lato-Black.ttf'),
    'Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Light': require('./assets/fonts/Lato-Light.ttf'),
    'Thin': require('./assets/fonts/Lato-Thin.ttf'),
  })

  if (!fontsLoaded) {
    return <ActivityIndicator size='large' color={theme.colors.green} />
  }


  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </AuthProvider>
  );
}