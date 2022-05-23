import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InvitationResponseAction from './InvitationResponseAction';
import {colors} from '../../utils/colors';

export default function InvitationResponses() {
  const [going, setGoing] = useState(false);

  return (
    <View style={styles.container}>
      <InvitationResponseAction
        selected={going}
        onPress={() => setGoing(true)}
        text="I'll be there"
        color={colors.GREEN}
        iconName="check"
      />
      <View style={styles.midSpace} />
      <InvitationResponseAction
        selected={!going}
        onPress={() => setGoing(false)}
        text="I'm not going"
        color={colors.PINK}
        iconName="x"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 11,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  midSpace: {
    width: 11,
  },
});
