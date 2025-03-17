import { StyleSheet, Image, Platform, View, ScrollView } from 'react-native';
import React from 'react'
import BackTop from "../components/appcomponenets/BackTop"
import ProfileScreen from "../components/appcomponenets/ProfileScreen";
const profile = () => {
  return (
    <View style={styles.Container}>
      <BackTop />
      <ProfileScreen/>
    </View>
  )
}
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
export default profile