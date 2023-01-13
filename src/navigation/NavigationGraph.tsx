import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../login/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationRouteNames, NavigationRoutes} from './NavigationRoutes';
import MainScreen from '../main/MainScreen';

const MainStack = createStackNavigator<NavigationRoutes>();

interface Props {
  isLoggingIn: boolean;
}

const NavigationGraph: React.FC<Props> = props => {
  let startRoute = NavigationRouteNames.Login;
  if (props.isLoggingIn) {
    startRoute = NavigationRouteNames.Main;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={startRoute}>
        <MainStack.Screen
          name={NavigationRouteNames.Login}
          component={LoginScreen}
        />
        <MainStack.Screen
          name={NavigationRouteNames.Main}
          component={MainScreen}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationGraph;
