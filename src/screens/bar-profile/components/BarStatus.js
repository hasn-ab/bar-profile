import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {SvgXml} from 'react-native-svg';
import LocationIcon from '../assets/svgs/location.svg';
import ClockIcon from '../assets/svgs/clock.svg';
export default function BarStatus() {
  return (
    <View style={[styles.container, styles.horizontalContainer]}>
      <View style={styles.horizontalContainer}>
        <LocationIcon />
        <Text style={styles.text}>22 There Now</Text>
      </View>

      <View style={styles.horizontalContainer}>
        <ClockIcon />
        <Text style={styles.text}>61 Going Later</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    height: 52,
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginHorizontal: 10,
    marginTop: -26,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.BLACK,
    marginStart: 10,
  },
});
