import { StyleSheet, Image, Platform, View, ScrollView } from 'react-native';
import React from 'react';
import BackTop from "../components/appcomponenets/BackTop";
import Subscription from "../components/appcomponenets/Subscription";

const subscription = () => {
    return (
      <View style={styles.Container}>
        <BackTop />
        <Subscription/>
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
export default subscription