import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {
  NavigationRouteNames,
  NavigationRoutes,
} from '../navigation/NavigationRoutes';

type AccountScreenProps = NativeStackScreenProps<
  NavigationRoutes,
  NavigationRouteNames.Account
>;

const AccountScreen: React.FC<AccountScreenProps> = props => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {}, []);

  if (isLoading) {
    return <ActivityIndicator />;
  } else {
    return (
      <Text>Account Screen</Text>
    );
  }
};

export default AccountScreen;

// export const AccountScreen = ({navigation}) => {
//   // const [isLoading, setLoading] = useState(true);
//   // const [data, setData] = useState([]);
//   //
//   // const getTwitterAccount = async () => {
//   //   let userId = getUserId();
//   //   let bearerToken = getBearerToken();
//   //   try {
//   //     const response = await fetch(
//   //       `https://api.twitter.com/2/users/${userId}?user.fields=id,name,username,profile_image_url`,
//   //       {
//   //         method: 'GET',
//   //         headers: {
//   //           Authorization: `Bearer ${bearerToken}`,
//   //         },
//   //       },
//   //     );
//   //     const json = await response.json();
//   //     console.log(json);
//   //   } catch (error) {
//   //     console.error(error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   //
//   // useEffect(() => {
//   //   getTwitterAccount();
//   // }, []);
//
//   return <Text>Test</Text>;
// };
