import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import Text = Animated.Text;
import {Tweet} from '../HomeModels';

interface Props {
  tweet: Tweet;
}

const TweetView: React.FC<Props> = props => {
  return (
    <View style={styles.lineStyle}>
      <Text>{props.tweet.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default TweetView;
