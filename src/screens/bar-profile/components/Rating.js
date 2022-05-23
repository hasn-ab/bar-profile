import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../utils/colors';

const Rating = ({containerStyle = {}, contentColor = colors.WHITE}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Icon name="star" color={contentColor} size={20} />
      <Text style={[styles.text, {color: contentColor}]}>12</Text>
    </View>
  );
};

export default Rating;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    marginStart: 7,
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 23.5,
  },
});
