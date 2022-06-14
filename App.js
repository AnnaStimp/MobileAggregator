import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Menu from './src/Components/SVG/Menu';
import Like from './src/Components/SVG/Like';

export default function App() {
  console.log('statusBarHeight: ', StatusBar.currentHeight);
  return (
    <View style={styles.container}>
      <View>
        <Text>Аня крутая!</Text>
        <Text>{StatusBar.currentHeight}</Text>
      </View>
      <View style={styles.header}>
        <Menu />
        <Like />
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'
  },
  header: {
    backgroundColor: '#FFABD8',
    height: 50,
    paddingHorizontal: 13,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  }
});