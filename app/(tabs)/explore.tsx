import { StyleSheet, Image, Platform, View, ScrollView } from 'react-native';
import TopBar from "../../components/appcomponenets/TopBar"
import ExploreScreen from "../../components/appcomponenets/ExploreScreen";
import { useState } from 'react';
export default function TabTwoScreen() {
  const [refresh, setRefresh] = useState(false);
  return (
    <View style={styles.Container}>
      <TopBar />
      <ExploreScreen /> 
    </View>
  );
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
