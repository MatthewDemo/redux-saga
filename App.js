import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux';
import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome to first screen (saga)' }}
          />
          <Stack.Screen
            name="Info"
            component={InfoScreen}
            options={{ title: 'Information abot hero (saga)' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
