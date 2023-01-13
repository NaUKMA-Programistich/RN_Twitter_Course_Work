import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  BottomBarRoutes,
  NavigationRouteNames,
  NavigationRoutes,
} from '../navigation/NavigationRoutes';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

type AccountScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomBarRoutes, NavigationRouteNames.Account>,
  StackScreenProps<NavigationRoutes>
>;
const AccountScreen: React.FC<AccountScreenProps> = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {}, []);

  if (isLoading) {
    return <ActivityIndicator />;
  } else {
    return <Text>Account Screen</Text>;
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
