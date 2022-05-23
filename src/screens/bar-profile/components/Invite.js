import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Icon from '../assets/svgs/invite.svg';
import {colors} from '../utils/colors';

export default function Invite({style = {}}) {
  return (
    <View style={style}>
      <View style={styles.container}>
        <Icon color={colors.WHITE} width={22.5} height={25} />
      </View>

      <Text style={styles.text}>Invite</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 58,
    height: 58,
    borderRadius: 50,
    backgroundColor: colors.PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.PURPLE,
    fontSize: 16,
    alignSelf: 'center',
    lineHeight: 22,
  },
});
