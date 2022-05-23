import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

export default function Information({
  mainText = '',
  smallText = '',
  style = {},
  mainTextColor = colors.BLACK,
  smallTextStyle = {},
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.mainText, {color: mainTextColor}]}>{mainText}</Text>
      <Text style={[styles.smallText, smallTextStyle]}>{smallText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 120,
    backgroundColor: colors.WHITE,
    height: 55,
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginStart: 14,
  },
  mainText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.BLACK,
  },
  smallText: {
    fontSize: 12.5,
    fontWeight: '400',
    color: colors.BLACK,
  },
});
