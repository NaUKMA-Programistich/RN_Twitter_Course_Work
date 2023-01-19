import React from 'react';
import {View} from 'react-native';
import {Media} from '../../models/Entities';
import PhotoView from './PhotoView';
import VideoView from './VideoView';
interface Props {
  media: Media;
}

const MediaView: React.FC<Props> = props => {
  let media = props.media;
  return (
    <View key={media.id_str}>
      {media.type === 'photo' && <PhotoView media={props.media} />}
      {media.type === 'video' && <VideoView media={props.media} />}
    </View>
  );
};

export default MediaView;
