import React, {useEffect, useState} from 'react';
import { ActivityIndicator, Animated, ScrollView } from "react-native";
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  BottomBarRoutes,
  NavigationRouteNames,
  NavigationRoutes,
} from '../navigation/NavigationRoutes';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {getHomeTimeline} from './HomeRepository';
import View = Animated.View;
import TweetView from './components/TweetView';
import {HomeTimeline} from './HomeModels';

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomBarRoutes, NavigationRouteNames.Home>,
  StackScreenProps<NavigationRoutes>
>;
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [isLoading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState<HomeTimeline>([]);

  useEffect(() => {
    const asyncGetTimeline = async () => {
      return getHomeTimeline();
    };

    asyncGetTimeline().then(it => {
      setTimeline(it);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <ScrollView>
      {timeline.map(tweet => (
        <TweetView tweet={tweet} key={tweet.id} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
