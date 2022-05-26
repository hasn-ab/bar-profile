import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
export default function UserInfo() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/friendAvatar.png')}
      />
      <Text style={styles.name}>Natalie Powell</Text>
      <Text style={styles.username}>nataliep0well</Text>

      <View style={styles.friendsInfoContainer}>
        <FeatherIcon name="users" size={20} color={colors.BLACK} />
        <Text style={styles.friendsText}>4 Friends</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: colors.PURPLE,
  },
  name: {
    color: colors.PURPLE,
    fontSize: 22,
    fontWeight: '800',
    marginTop: 12,
  },
  username: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.GREY,
    marginTop: 8,
  },
  friendsInfoContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  friendsText: {
    marginStart: 10,
    fontSize: 18,
    fontWeight: '600',
    color: colors.BLACK,
  },
});
