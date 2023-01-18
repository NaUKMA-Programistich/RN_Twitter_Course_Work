import AsyncStorage from '@react-native-async-storage/async-storage';
import {TwitterConstants} from '../login/components/TwitterConstans';
import OAuth from 'oauth-1.0a';
import Crypto from 'react-native-quick-crypto';

const AUTH_TOKEN_KEY = '@auth_token_key';
const AUTH_TOKEN_SECRET_KEY = '@auth_token_secret_key';
const USER_ID_KEY = '@user_id_key';
export async function setTokens(
  authToken: string,
  authTokenSecret: string,
  userId: string,
) {
  await AsyncStorage.setItem(AUTH_TOKEN_KEY, authToken);
  await AsyncStorage.setItem(AUTH_TOKEN_SECRET_KEY, authTokenSecret);
  await AsyncStorage.setItem(USER_ID_KEY, userId);
}

export async function isLogged(): Promise<boolean> {
  const tokens = await getAuthData();
  return (
    tokens.authToken !== null &&
    tokens.authTokenSecret !== null &&
    tokens.userId !== null
  );
}

export async function getAuthData(): Promise<{
  authToken: string | null;
  authTokenSecret: string | null;
  userId: string | null;
}> {
  const authToken = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
  const authTokenSecret = await AsyncStorage.getItem(AUTH_TOKEN_SECRET_KEY);
  const userId = await AsyncStorage.getItem(USER_ID_KEY);
  return {
    authToken: authToken,
    authTokenSecret: authTokenSecret,
    userId: userId,
  };
}

export const getOauthHeader = async (request: OAuth.RequestOptions) => {
  const tokens = await getAuthData();
  const oauth = new OAuth({
    consumer: {
      key: TwitterConstants.twitterConsumerApiKey,
      secret: TwitterConstants.twitterConsumerApiSecret,
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return Crypto.createHmac('sha1', key)
        .update(base_string)
        .digest('base64');
    },
  });
  const authorization = oauth.authorize(request, {
    key: tokens.authToken!,
    secret: tokens.authTokenSecret!,
  });
  return oauth.toHeader(authorization);
};

//   (oauth_signature = '4YwXDPn4sVzI20M8P8EGKVw6AVg%3D');

// export const getBearerToken = async () => {
//   let splitTokens =
//     TwitterConstants.twitterConsumerApiKey +
//     ':' +
//     TwitterConstants.twitterConsumerApiSecret;
//   const Buffer = require('buffer').Buffer;
//   let encodedTokens = Buffer.from(splitTokens).toString('base64');
//   console.log('encodedTokens', encodedTokens);
//
//   const url =
//     'https://api.twitter.com/oauth2/token?' +
//     new URLSearchParams({
//       grant_type: 'client_credentials',
//     }).toString();
//
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         Authorization: `Basic ${encodedTokens}`,
//         Host: 'api.twitter.com',
//       },
//     });
//     const json = await response.json();
//     console.log(json);
//
//     return json.access_token;
//   } catch (error) {
//     console.error(error);
//   }
// };
