import React, {useState} from 'react';
import TwitterLoginButton from './components/TwitterLoginButton';
import {
  NavigationRouteNames,
  NavigationRoutes,
} from '../navigation/NavigationRoutes';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {ActivityIndicator} from 'react-native';
import {setTokens} from '../auth/AuthStorage';

type LoginScreenProps = NativeStackScreenProps<
  NavigationRoutes,
  NavigationRouteNames.Login
>;

const LoginScreen: React.FC<LoginScreenProps> = props => {
  const [isLoading, setLoading] = useState(false);
  const onLogin = async (
    authToken: string,
    authTokenSecret: string,
    userId: string,
  ) => {
    await setTokens(authToken, authTokenSecret, userId);
    setLoading(false);
    props.navigation.navigate(NavigationRouteNames.Main, {
      screen: NavigationRouteNames.Account,
    });
  };
  const onError = () => {
    setLoading(false);
  };

  const onLoading = () => {
    setLoading(true);
  };

  if (isLoading) {
    return <ActivityIndicator />;
  } else {
    return (
      <TwitterLoginButton
        onLogin={onLogin}
        onError={onError}
        onLoading={onLoading}
      />
    );
  }
};

export default LoginScreen;
