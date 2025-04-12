import { StyleSheet, Image, Platform, View, ScrollView } from 'react-native';
import React from 'react';
import BackTop from "../components/appcomponenets/BackTop";
import PayViaCrypto from "../components/appcomponenets/PayViaCrypto";

const payviacrypto = () => {
  return (
    <View style={styles.Container}>
    <BackTop />
    <PayViaCrypto/>
  </View>
  )
}

export default payviacrypto

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