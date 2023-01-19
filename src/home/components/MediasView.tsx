import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Media} from '../models/Entities';
import MediaView from './media/MediaView';
interface Props {
  medias: Media[];
}

const MediasView: React.FC<Props> = props => {
  return (
    <ScrollView horizontal={true} style={styles.root}>
      {props.medias.map(media => (
        <MediaView key={media.id_str} media={media} />
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
});

export default MediasView;
