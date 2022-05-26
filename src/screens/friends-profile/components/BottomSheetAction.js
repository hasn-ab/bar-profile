import {
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity as RnTouchable,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {TouchableOpacity as GhTouchable} from 'react-native-gesture-handler';
import {colors} from '../../../utils/colors';
const {width: SCREEN_WIDTH} = Dimensions.get('screen');
const TouchableOpacity = Platform.OS === 'android' ? RnTouchable : GhTouchable;

export default function BottomSheetAction({
  textColor,
  backgroundColor,
  onPress,
  text,
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor}]}
      onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: SCREEN_WIDTH * 0.8,
    height: 45,
    borderRadius: 30,
    marginTop: 12,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: '600',
  },
});
