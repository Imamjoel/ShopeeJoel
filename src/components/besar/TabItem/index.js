import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeAktif,
  IconJersey,
  IconJerseyAktif,
  IconProfile,
  IconProfileAktif,
} from '../../../assets/icons';
import {colors} from '../../../utils'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }

    if (label === 'Jersey') {
      return isFocused ? <IconJerseyAktif /> : <IconJersey />;
    }

    if (label === 'Profile') {
      return isFocused ? <IconProfileAktif /> : <IconProfile />;
    }

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
   
  },
  text: (isFocused) => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    marginTop: 4,
  })
});
