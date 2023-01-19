import React from 'react';
import {Animated, Linking, StyleSheet, View} from 'react-native';
import Text = Animated.Text;
import {Tweet} from '../models/Tweet';
import ProfileView from './ProfileView';
import MediasView from './MediasView';

interface Props {
  tweet: Tweet;
}

const TweetView: React.FC<Props> = props => {
  const medias = props.tweet.extended_entities?.media;
  const openUrl = `https://twitter.com/${props.tweet.user.screen_name}/status/${props.tweet.id_str}`;

  return (
    <View style={styles.root}>
      <ProfileView user={props.tweet.user} />
      <Text>{props.tweet.text}</Text>
      {medias && <MediasView medias={medias} />}
      <Text style={styles.button} onPress={() => Linking.openURL(openUrl)}>
        {'Open Tweet in Twitter'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 2,
  },
  screenName: {
    color: 'blue',
  },
  button: {
    color: 'blue',
  },
});

export default TweetView;
