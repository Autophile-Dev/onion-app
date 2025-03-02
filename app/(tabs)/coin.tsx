import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import TopBar from "../../components/appcomponenets/TopBar"
import CoinScreen from "../../components/appcomponenets/CoinScreen";
const coin = () => {
  return (
    <View style={styles.Container}>
      <TopBar />
      <CoinScreen/>
    </View>
  )
}

export default coin

const styles = StyleSheet.create({
  Container: {
    flex:1,
    backgroundColor:'#1c4d4d',
    paddingTop:40
  },
  contentContainer:{
    paddingBottom:130,
  },
});