import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useCallback} from 'react';
import Rating from '../Rating';
import {colors} from '../../utils/colors';
import Reward from './Reward';
import {getSlicesOfSix} from '../../utils/rewardsHelper';
const {width: SCREEN_WIDTH} = Dimensions.get('screen');

//Rewards section Container
function Rewards({
  style = {},
  rewards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
}) {
  const paginationData = useRef(null);

  if (!paginationData.current) {
    //converts rewards props to nested array of size 6
    paginationData.current = getSlicesOfSix(rewards);
  }

  const onItemPress = useCallback(() => {
    console.log('reward item press');
  }, []);

  return (
    <View>
      <View style={[styles.topContainer, style]}>
        <Text style={styles.title}>Rewards</Text>
        <Rating containerStyle={styles.rating} contentColor={colors.PURPLE} />
      </View>

      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}>
        {/* Maps number of pages */}
        {paginationData?.current?.map(pageRewards => {
          return (
            <View style={styles.rewardsContainer}>
              {/* maps reward item for each page */}
              {pageRewards?.map(reward => (
                <Reward onPress={onItemPress} style={styles.rewardItem} />
              ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default React.memo(Rewards);

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rating: {
    backgroundColor: colors.WHITE,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.BLACK,
    lineHeight: 27,
  },
  rewardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH,
    paddingHorizontal: 16,
  },
  rewardItem: {
    marginTop: 8,
    marginBottom: 8,
  },
});
