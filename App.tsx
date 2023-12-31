import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

import Home from './src/screens/Home';
import Product from './src/screens/Products';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['exp://192.168.0.101:19000/--/myapp'],
        config: {
          screens: {
            home: {
              path: 'home',
            },
            product: {
              path: 'product/:id',
              parse: {
                id: (id: string) => id,
              },
            },
          },
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='product' component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
