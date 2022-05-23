import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Component, useContext} from 'react';
import Header from './components/header/Header';
import InvitationResponses from './components/invitation/InvitationResponses';
import Friends from './components/friends/Friends';
import Rewards from './components/Rewards/Rewards';
import {colors} from './utils/colors';
import BarStatus from './components/BarStatus';
import {BarContext} from './context';

function BarProfileUI() {
  // all data should be provided using provider component
  //const data = useContext(BarContext);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Header />
          <BarStatus />
          <InvitationResponses />
          <View style={styles.contentContainer}>
            <Friends style={styles.friendsContainer} />
            <Rewards style={styles.rewardsContainer} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default BarProfileUI;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    flex: 1,
  },
  friendsContainer: {
    marginTop: 22,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    paddingBottom: 24,
  },
  rewardsContainer: {
    marginTop: 22,
    paddingHorizontal: 20,
  },
});
