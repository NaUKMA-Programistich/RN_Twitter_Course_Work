import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../login/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../account/AccountScreen';
import {NavigationRouteNames, NavigationRoutes} from './NavigationRoutes';

const MainStack = createStackNavigator<NavigationRoutes>();

interface Props {
  isLoggingIn: boolean;
}

const NavigationGraph: React.FC<Props> = props => {
  let startRoute = NavigationRouteNames.Login;
  if (props.isLoggingIn) {
    startRoute = NavigationRouteNames.Account;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={startRoute}>
        <MainStack.Screen
          name={NavigationRouteNames.Login}
          component={LoginScreen}
        />
        <MainStack.Screen
          name={NavigationRouteNames.Account}
          component={AccountScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationGraph;
