import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LocationIcon from '../../assets/svgs/location-white.svg';
import {colors} from '../../utils/colors';
export default function CheckIn() {
  return (
    <View style={styles.container}>
      <LocationIcon color={'#ffffff'} />
      <Text style={styles.text}>Check In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.PURPLE,
    height: 55,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text: {
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: '900',
    marginStart: 6,
  },
});
