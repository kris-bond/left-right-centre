import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  NavigationContainer,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SetupScreen from './SetupScreen';
import GameScreen from './GameScreen';
import HelpScreen from './HelpScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerTitle: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="SetupScreen"
          component={SetupScreen}
          options={{
            headerTitle: 'Setup',
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="HelpScreen"
          component={HelpScreen}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
