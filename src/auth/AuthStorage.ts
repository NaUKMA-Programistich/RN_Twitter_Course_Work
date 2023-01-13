import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const getBearerToken = async () => {
  let tokens = await getAuthData();
  console.log('tokens', tokens);
  let splitTokens = tokens.authToken + ':' + tokens.authTokenSecret;
  const Buffer = require('buffer').Buffer;
  let encodedTokens = Buffer.from(splitTokens).toString('base64');
  console.log('encodedTokens', encodedTokens);

  try {
    const response = await fetch(
      'https://api.twitter.com/oauth2/token?grant_type=client_credentials',
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${encodedTokens}`,
        },
      },
    );
    const json = await response.json();
    console.log(json);

    return json.access_token;
  } catch (error) {
    console.error(error);
  }
};
