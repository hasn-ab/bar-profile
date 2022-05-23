import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/Feather';

export default function Friend({name = '', style = {}}) {
  const [selected, setSelected] = useState(false);
  const iconName = selected ? 'check' : 'x';
  const color = selected ? colors.GREEN : colors.PINK;

  return (
    <TouchableOpacity onPress={() => setSelected(!selected)}>
      <View style={[styles.container, style]}>
        <ImageBackground
          source={require('../../assets/friendAvatar.png')}
          resizeMode="cover"
          imageStyle={[styles.avatar, {borderColor: color}]}
          style={styles.avatarBackgound}>
          <View style={styles.avatarInnerContainer}>
            <View style={[styles.overlay, {backgroundColor: color + '66'}]} />
            <Icon size={25} name={iconName} color={colors.WHITE} />
          </View>
        </ImageBackground>

        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 80,
    width: 80,
    alignItems: 'center',
  },
  avatarBackgound: {
    width: 58,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInnerContainer: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.GREEN,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 50,
  },
  name: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.BLACK,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
