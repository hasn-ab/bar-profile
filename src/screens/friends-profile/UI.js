/* eslint-disable prettier/prettier */
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React, {useRef, useState, useCallback, useMemo} from 'react';
import UserInfo from './components/UserInfo';
import InviteButton from './components/InviteButton';
import {colors} from '../../utils/colors';
import Header from './components/Header';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import BottomSheetAction from './components/BottomSheetAction';
export default function FriendProfileUI() {
  const bottomSheetRef = useRef('ref');
  const snapPoints = useMemo(() => ['20%', '20%'], []);

  const handleSheetChanges = useCallback(index => {}, []);

  const onSettingsPress = useCallback(() => {
    bottomSheetRef.current.expand();
  }, []);

  const onBlockPress = useCallback(() => {
    bottomSheetRef.current.close();
  }, []);

  const onRemoveFriendPress = useCallback(() => {
    bottomSheetRef.current.close();
  }, []);

  const onBackPress = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Header onBackPress={onBackPress} onSettingsPress={onSettingsPress} />
          <View style={styles.contentContainer}>
            <UserInfo />
            <InviteButton />
          </View>
        </View>
      </SafeAreaView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        enablePanDownToClose
        handleIndicatorStyle={styles.bottomSheetIndicator}
        backdropComponent={BottomSheetBackdrop}
        contentHeight={600}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.bottomSheetContent}>
          <BottomSheetAction
            onPress={onRemoveFriendPress}
            backgroundColor={'brown'}
            text="Remove Friend"
          />
          <BottomSheetAction
            onPress={onBlockPress}
            backgroundColor={'grey'}
            text="Block"
          />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomSheetContent: {
    flex: 1,
    backgroundColor: colors.WHITE,
    width: '100%',
    alignItems: 'center',
  },
  bottomSheetIndicator: {
    height: 0,
  },
});
