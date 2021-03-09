import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from './src/Cart';
import HomeScreen from './src/HomeScreen';
import {Provider} from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.Container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
  },
});
