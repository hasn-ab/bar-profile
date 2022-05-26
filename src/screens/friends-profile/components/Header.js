import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../../utils/colors';

export default function Header({onSettingsPress, onBackPress}) {
  return (
    <View style={styles.container}>
      <Icon
        onPress={onBackPress}
        name="arrowleft"
        size={30}
        color={colors.PURPLE}
      />
      <Icon
        onPress={onSettingsPress}
        name="setting"
        size={30}
        color={colors.PURPLE}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 16,
  },
});
