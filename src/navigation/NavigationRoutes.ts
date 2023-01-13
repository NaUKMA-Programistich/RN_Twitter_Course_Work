import {NavigatorScreenParams} from '@react-navigation/native';

export type NavigationRoutes = {
  Login: undefined;
  Main: NavigatorScreenParams<BottomBarRoutes>;
};

export type BottomBarRoutes = {
  Account: undefined;
  Home: undefined;
};

export enum NavigationRouteNames {
  Login = 'Login',
  Account = 'Account',
  Main = 'Main',
  Home = 'Home',
}
