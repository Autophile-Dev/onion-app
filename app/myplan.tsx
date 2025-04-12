import { StyleSheet, Image, Platform, View, ScrollView, Text } from 'react-native';
import React from 'react';
import BackTop from "../components/appcomponenets/BackTop";
import MyPlans from "../components/appcomponenets/MyPlans";

const myplan = () => {
  return (
    <View style={styles.Container}>
    <BackTop />
    <MyPlans/>
  </View>
  )
}

export default myplan

const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor:'#1c4d4d',
        paddingTop:40
      },
      contentContainer:{
        paddingBottom:130,
      },
})