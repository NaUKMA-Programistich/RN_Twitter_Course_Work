import React from 'react';
import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import {User} from '../models/User';

interface Props {
  user: User;
}

const ProfileView: React.FC<Props> = props => {
  return (
    <View style={styles.profileStyle}>
      <Image
        style={styles.profileImage}
        source={{uri: props.user.profile_image_url_https}}
      />
      <View>
        <Text>{props.user.name}</Text>
        <Text
          style={styles.screenName}
          onPress={() =>
            Linking.openURL(`https://twitter.com/${props.user.screen_name}`)
          }>{`@${props.user.screen_name}`}</Text>
      </View>
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
  profileStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
});

export default ProfileView;
