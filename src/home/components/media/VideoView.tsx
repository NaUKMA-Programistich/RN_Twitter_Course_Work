import React from 'react';
import {StyleSheet} from 'react-native';
import {Media} from '../../models/Entities';
import Video from 'react-native-video';

const defaultVideoHeight = 300;

interface Props {
  media: Media;
}

const VideoView: React.FC<Props> = props => {
  let media = props.media;
  let url = media.video_info?.variants[0].url || '';
  let ratios = media.sizes.small.w / media.sizes.small.h;
  return (
    <Video
      style={[styles.video, {width: defaultVideoHeight * ratios}]}
      source={{uri: url}}
      muted={true}
      paused={true}
      repeat={true}
      controls={true}
    />
  );
};
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  image: {
    height: defaultVideoHeight,
    resizeMode: 'contain',
    marginRight: 10,
  },
  video: {
    height: defaultVideoHeight,
    width: 200,
  },
});

export default VideoView;
