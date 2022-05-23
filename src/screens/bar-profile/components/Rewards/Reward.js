import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import ArcProgress from './ArcProgress';

export default function Reward({style = {}, onPress = () => {}}) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View style={[styles.container, style]}>
        <View>
          <ArcProgress image={require('../../assets/beer.png')} />
        </View>
        <Text style={styles.text}>Free</Text>
        <Text style={styles.text}>Miller Lite</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 105,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 7,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.BLACK,
  },
});
