import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default function Arc({image = null}) {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={63}
        width={6}
        fill={100}
        tintColor={colors.PURPLE}
        rotation={210}
        arcSweepAngle={300}
        backgroundColor={colors.PURPLE}
      />

      <Text style={styles.text}>50</Text>
      <View style={styles.imageContainer}>
        <Image source={image} resizeMode="contain" style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '900',
    color: colors.BLACK,
  },
  imageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 35,
    height: 35,
  },
});
