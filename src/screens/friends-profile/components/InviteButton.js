import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import InviteIcon from '../assets/invite.svg';

export default function InviteButton() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <InviteIcon color={colors.WHITE} width={25} height={25} />
        <Text style={styles.text}>Invite Natalie Out</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PURPLE,
    width: 300,
    paddingVertical: 12,
    height: 65,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    color: colors.WHITE,
    fontSize: 20,
    fontWeight: '700',
    marginStart: 10,
  },
});
