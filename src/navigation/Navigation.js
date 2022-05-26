import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BarProfile from '../screens/bar-profile';
import FriendProfile from '../screens/friends-profile';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="BarProfile" component={BarProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
