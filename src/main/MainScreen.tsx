import React from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {
  NavigationRouteNames,
  NavigationRoutes,
} from '../navigation/NavigationRoutes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../account/AccountScreen';
import HomeScreen from '../home/HomeScreen';
import HomeIcons from './icons/HomeIcons';
import AccountIcons from './icons/Accountcons';

const TabStack = createBottomTabNavigator();

type MainScreenProps = NativeStackScreenProps<
  NavigationRoutes,
  NavigationRouteNames.Main
>;

const MainScreen: React.FC<MainScreenProps> = () => {
  return (
    <TabStack.Navigator initialRouteName={NavigationRouteNames.Home}>
      <TabStack.Screen
        name={NavigationRouteNames.Home}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <HomeIcons />,
        }}
      />
      <TabStack.Screen
        name={NavigationRouteNames.Account}
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => <AccountIcons />,
        }}
      />
    </TabStack.Navigator>
  );
};

export default MainScreen;
