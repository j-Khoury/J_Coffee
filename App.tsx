import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
// import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/screens/auth/login.tsx';
import SignupScreen from './src/screens/auth/signup.tsx';
import ProfileScreen from './src/screens/profileScreen.tsx';
// import HomeScreen from './src/screens/HomeScreen.tsx';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="LogIn"
          component={LoginScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
