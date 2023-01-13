import React from 'react';
import {Button, NativeModules} from 'react-native';
import {TwitterConstants} from './TwitterConstans';

const {RNTwitterSignIn} = NativeModules;

interface Props {
  onLogin: (authToken: string, authTokenSecret: string, userId: string) => void;
  onError: () => void;
  onLoading: () => void;
}

const TwitterLoginButton: React.FC<Props> = props => {
  // TODO find a way to get the twitter keys from the config file
  const twitterApiKey = TwitterConstants.twitterConsumerApiKey;
  const twitterApiSecret = TwitterConstants.twitterConsumerApiSecret;

  let onSingIn = () => {
    props.onLoading();
    RNTwitterSignIn.init(twitterApiKey, twitterApiSecret);
    RNTwitterSignIn.logIn()
      .then(
        (loginData: {
          authToken: string;
          authTokenSecret: string;
          userID: string;
        }) => {
          console.log(loginData);
          if (loginData.authToken && loginData.authTokenSecret) {
            props.onLogin(
              loginData.authToken,
              loginData.authTokenSecret,
              loginData.userID,
            );
          }
        },
      )
      .catch((error: any) => {
        console.log(error);
        props.onError();
      });
  };

  return <Button onPress={onSingIn} title="Login via Twitter" />;
};

export default TwitterLoginButton;
