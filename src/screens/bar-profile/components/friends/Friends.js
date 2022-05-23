import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Invite from '../Invite';
import Friend from './Friend';

export default function Friends({style = {}}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Friends</Text>

      <View style={styles.listContainer}>
        <Friend style={styles.friendItem} name="Natalie" />
        <Friend style={styles.friendItem} name="Jake" />
        <Invite style={styles.inviteItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 27.28,
    marginBottom: 16,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  friendItem: {
    marginTop: 6,
  },
  inviteItem: {
    marginStart: 10,
  },
});
