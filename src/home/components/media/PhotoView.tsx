import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Media} from '../../models/Entities';

const defaultImageHeight = 200;

interface Props {
  media: Media;
}

const PhotoView: React.FC<Props> = props => {
  let media = props.media;
  let ratios = media.sizes.small.w / media.sizes.small.h;
  return (
    <Image
      key={media.media_url_https}
      source={{uri: media.media_url_https}}
      style={[
        styles.image,
        {
          width: defaultImageHeight * ratios,
        },
      ]}
    />
  );
};
const styles = StyleSheet.create({
  image: {
    height: defaultImageHeight,
    resizeMode: 'contain',
    marginRight: 10,
  },
});

export default PhotoView;
