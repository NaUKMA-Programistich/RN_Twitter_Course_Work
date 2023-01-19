import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  BottomBarRoutes,
  NavigationRouteNames,
  NavigationRoutes,
} from '../navigation/NavigationRoutes';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {getHomeTimeline} from './HomeRepository';
import TweetView from './components/TweetView';
import {Tweet} from './models/Tweet';

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomBarRoutes, NavigationRouteNames.Home>,
  StackScreenProps<NavigationRoutes>
>;
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [isLoading, setLoading] = useState(true);
  const [isRefreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<Tweet[]>([]);

  const asyncGetTimeline = async () => {
    return getHomeTimeline();
  };

  const refreshTimeline = async () => {
    setRefreshing(true);
    asyncGetTimeline()
      .then(it => {
        console.log(it);
        setTimeline(it);
        setError(null);
      })
      .catch((error: Error) => {
        setError(error.message);
      });
    setRefreshing(false);
  };

  useEffect(() => {
    asyncGetTimeline()
      .then(it => {
        console.log('Init screen', it);
        setTimeline(it);
        setError(null);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .then(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <ScrollView
      style={styles.root}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refreshTimeline} />
      }>
      {error && <Text>{`${error}\nRefresh Please`}</Text>}
      {!error &&
        timeline.map(tweet => <TweetView tweet={tweet} key={tweet.id_str} />)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 10,
  },
  error: {
    justifyContent: 'center',
  },
});

export default HomeScreen;
