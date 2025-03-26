import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const [isSignal, setIsSignal] = useState(true);
  const [isNews, setIsNews] = useState(true);
  const [isOther, setIsOther] = useState(true);

  const SignalSwitch = async () => {
    setIsSignal((previousState) => !previousState);
    await AsyncStorage.setItem("isSignal", toString(isSignal));
  };
  const NewsSwitch = async () => {
    setIsNews((previousState) => !previousState);
    await AsyncStorage.setItem("isNews", toString(isNews));
  };
  const OtherSwitch = async () => {
    setIsOther((previousState) => !previousState);
    await AsyncStorage.setItem("isOther", toString(isOther));
  };
  const shareContent = async () => {
    try {
      const result = await Share.share({
        message: "Check out this cool app!",
        url: "https://play.google.com/store/apps/details?id=com.onion.android",
        title: "Onion Crypto",
      });
      if (result.action === Share.sharedAction) {
        console.log("Shared successfully");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const load_data = async () => {
    try {
      let userid = await AsyncStorage.getItem("userid");
      let username = await AsyncStorage.getItem("username");
      let access = await AsyncStorage.getItem("access");
      let refresh = await AsyncStorage.getItem("refresh");
      setUsername(username);
    } catch (err) {
      alert("error", err);
    }
  };
  useEffect(() => {
    load_data();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.ProfileText}>Profile & Settings</Text>

        {/* Profile Card */}
        <View style={styles.profileCardContainer}>
          <View style={styles.innerProfileCardContainer}>
            <View style={styles.innerProfilePortfolioCardContainer}>
              <View style={styles.innerProfilePortfolioPictureContainer}>
                <Image
                  style={styles.profilePic}
                  source={require("../../assets/images/iconsapp/profile.png")}
                />
              </View>
              <View style={styles.innerProfilePortfolioContentContainer}>
                <View style={styles.titleContainerProfile}>
                  <Image
                    style={styles.profileCrown}
                    source={require("../../assets/images/iconsapp/crown.png")}
                  />
                  <Text style={styles.profileName}>Waleed Zaheer</Text>
                </View>
                <Text style={styles.profileEmail}>
                  waleed@onioncryptosignals.com
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Subscription Container */}
        <View style={styles.subscriptionCardContainer}>
          <View style={styles.innerSubscriptionCardContainer}>
            <View style={styles.innerSubscriptionCardTextContainer}>
              <Text style={styles.areaTextTitle}>SUBSCRIPTION</Text>
              <View style={styles.areaTextContainer}>
                <View style={styles.areaRow}></View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 20,
  },
  ProfileText: {
    fontSize: 20,
    marginHorizontal: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  profileCardContainer: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    // backgroundColor: "#E07A7AFF",
  },
  innerProfileCardContainer: {
    backgroundColor: "#ffffff",
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 15,
    // shadowColor: "#F4B41A",
    // shadowOpacity: 0,
    // shadowRadius: 50,
    // elevation: 0,
  },
  innerProfilePortfolioCardContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 26,
    alignItems: "center",
  },
  innerProfilePortfolioPictureContainer: {
    width: 76,
    height: 76,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#113838",
  },
  profilePic: {
    width: "100%",
    height: "100%",
  },
  innerProfilePortfolioContentContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // gap: 1,
  },
  titleContainerProfile: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  profileCrown: {
    width: 20,
    height: 16,
  },
  profileName: {
    color: "#1C4C4C",
    fontSize: 14,
    fontWeight: "bold",
  },
  profileEmail: {
    color: "#1C4C4C",
    fontSize: 12,
    // fontWeight: "bold",
  },
  subscriptionCardContainer: {
    width: "100%",
    paddingBottom: 20,
    paddingHorizontal: 20,
    // backgroundColor: "#E07A7AFF",
  },
  innerSubscriptionCardContainer: {
    // backgroundColor: "#ffffff",
    width: "100%",
  },
  innerSubscriptionCardTextContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },
  areaTextTitle: {
    color: "#ffffff",
    fontSize: 12,
  },
  areaTextContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1E5A5A",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 15,
  },
  areaRow:{
    
  }
});
