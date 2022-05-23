import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/AntDesign';
import Rating from '../Rating';
import {colors} from '../../utils/colors';
import BusinessInformation from './BusinessInformation';
export default function Header() {
  return (
    <View>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={require('../../assets/headerBackground.png')}>
        <View style={styles.imageContainer}>
          <View style={styles.arrowRatingContainer}>
            <Icon name="arrowleft" size={30} color={colors.WHITE} />
            <Rating contentColor="white" containerStyle={styles.topRating} />
          </View>

          <Text style={styles.title}>Jake's Tavern</Text>

          <BusinessInformation />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 231,
    width: width,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.TRANSPARENT_BLACK,
  },
  arrowRatingContainer: {
    marginTop: 22,
    marginHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topRating: {
    backgroundColor: colors.PURPLE,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.WHITE,
    alignSelf: 'center',
    marginTop: 9,
    lineHeight: 43.65,
  },
});
