import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign , MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBarHeight } from './shared';

const NotFound = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <MaterialCommunityIcons name='emoticon-sad-outline' size={90} color='black' />
      <Text style={{ marginTop: 20, fontSize: 20 }}>Résultat introuvable</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    opacity: 0.5,
    zIndex: -1,
    marginTop:StatusBarHeight + 50
  
    

  },
});

export default NotFound;
