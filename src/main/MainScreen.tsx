import React from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {
  NavigationRouteNames,
  NavigationRoutes,
} from '../navigation/NavigationRoutes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../account/AccountScreen';
import HomeScreen from '../home/AccountScreen';

const TabStack = createBottomTabNavigator();

type MainScreenProps = NativeStackScreenProps<
  NavigationRoutes,
  NavigationRouteNames.Main
>;

const MainScreen: React.FC<MainScreenProps> = () => {
  return (
    <TabStack.Navigator initialRouteName={NavigationRouteNames.Account}>
      <TabStack.Screen
        name={NavigationRouteNames.Account}
        component={AccountScreen}
      />
      <TabStack.Screen
        name={NavigationRouteNames.Home}
        component={HomeScreen}
      />
    </TabStack.Navigator>
  );
};

export default MainScreen;
