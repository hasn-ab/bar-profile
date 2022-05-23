import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../utils/colors';

export default function InvitationResponseAction({
  selected = false,
  color,
  iconName = 'check',
  containerStyle = {},
  text = '',
  onPress = () => {},
}) {
  //change backgroundcolor and text color based on selected prop
  const backgroundColor = selected ? color : colors.WHITE;
  const contentColor = selected ? colors.WHITE : color;
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View
        style={[
          styles.container,
          containerStyle,
          selected
            ? {backgroundColor, borderColor: color}
            : {
                backgroundColor: colors.WHITE,
                borderColor: color,
              },
        ]}>
        <Icon size={20} name={iconName} color={contentColor} />
        <Text style={[styles.text, {color: contentColor}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    backgroundColor: colors.WHITE,
    marginBottom: 5,
    borderRadius: 20,
    paddingVertical: 11,
    borderWidth: 3,
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5,
    elevation: 5,
  },
  containerFilled: {},
  containerBordered: {},
  text: {
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 24.5,
    marginStart: 11,
  },
});
