import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React from 'react';
import CheckIn from './CheckIn';
import Information from './Information';
import {colors} from '../../utils/colors';

export default function BusinessInformation() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.businessInformation}>
        <CheckIn />
        <Information
          mainText="Open"
          smallText="5:00pm - 12:00am"
          mainTextColor={colors.GREEN}
          style
        />
        <Information mainText="1606 7th St NW" smallText="Washington, DC" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  businessInformation: {
    flexDirection: 'row',
    paddingStart: 14,
    marginTop: 18,
  },
  openTiming: {
    marginEnd: 10,
  },
});
