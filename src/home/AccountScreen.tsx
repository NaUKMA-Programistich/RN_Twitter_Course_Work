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

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomBarRoutes, NavigationRouteNames.Home>,
  StackScreenProps<NavigationRoutes>
>;
const HomeScreen: React.FC<HomeScreenProps> = () => {
  return <Text>Home Screen</Text>;
};

export default HomeScreen;
