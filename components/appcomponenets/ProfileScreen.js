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
import { Switch } from "react-native";
import { Link } from "expo-router";

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
                <TouchableOpacity onPress={()=>navigation.navigate("myplan")} style={styles.areaRow}>
                  <View style={styles.rowTitle}>
                    <Text style={styles.rowTitle}>My Plan</Text>
                  </View>
                  <View style={styles.rowIdentification}>
                    <Image
                      style={styles.rowIdentificationImage}
                      source={require("../../assets/images/iconsapp/crown.png")}
                    />
                    <Text style={styles.identificationText}>VIP MEMBER</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("subscription")} style={styles.areaRow}>
                  {/* <Text style={styles.rowTitle}>My Plan</Text> */}
                 
                    <View style={styles.rowIdentificationNewRow}>
                      <Image
                        style={styles.rowIdentificationImageNewRowyellow}
                        source={require("../../assets/images/iconsapp/subscription.png")}
                      />
                      <Text style={styles.identificationTextYellow}>
                        View Plans
                      </Text>
                    </View>
                 
                </TouchableOpacity>
                <View style={styles.areaRow}>
                  {/* <Text style={styles.rowTitle}>My Plan</Text> */}
                  <View style={styles.rowIdentificationNewRow}>
                    <Image
                      style={styles.rowIdentificationImageNewRowWhite}
                      source={require("../../assets/images/iconsapp/redeemcode.png")}
                    />
                    <Text style={styles.identificationTextWhite}>
                      Redeem Code
                    </Text>
                  </View>
                </View>
                <View style={styles.areaRowLast}>
                  <View style={styles.rowIdentificationNewRow}>
                    <Image
                      style={styles.rowIdentificationImageNewRowWhite}
                      source={require("../../assets/images/iconsapp/subhistory.png")}
                    />
                    <Text style={styles.identificationTextWhite}>
                      Subscription History
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Notifications */}
        <View style={styles.subscriptionCardContainer}>
          <View style={styles.innerSubscriptionCardContainer}>
            <View style={styles.innerSubscriptionCardTextContainer}>
              <Text style={styles.areaTextTitle}>NOTIFICATION</Text>
              <View style={styles.areaTextContainer}>
                <View style={styles.areaRow}>
                  <View style={styles.rowTitle}>
                    <Text style={styles.rowTitle}>Signals</Text>
                  </View>
                  <View style={styles.rowIdentification}>
                    <Switch
                      style={{ height: 20, width: 40 }}
                      trackColor={{ false: "#0F4444", true: "#3CBEBE" }}
                      thumbColor={isSignal ? "#ffff" : "#ffff"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={SignalSwitch}
                      value={isSignal}
                    />
                  </View>
                </View>
                <View style={styles.areaRow}>
                  {/* <Text style={styles.rowTitle}>My Plan</Text> */}
                  <View style={styles.rowTitle}>
                    <Text style={styles.rowTitle}>News</Text>
                  </View>
                  <View style={styles.rowIdentification}>
                    <Switch
                      style={{ height: 20, width: 40 }}
                      trackColor={{ false: "#0F4444", true: "#3CBEBE" }}
                      thumbColor={isNews ? "#ffff" : "#ffff"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={NewsSwitch}
                      value={isNews}
                    />
                  </View>
                </View>

                <View style={styles.areaRowLast}>
                  <View style={styles.rowTitle}>
                    <Text style={styles.rowTitle}>Other Alerts</Text>
                  </View>
                  <View style={styles.rowIdentification}>
                    <Switch
                      style={{ height: 20, width: 40 }}
                      trackColor={{ false: "#0F4444", true: "#3CBEBE" }}
                      thumbColor={isOther ? "#ffff" : "#ffff"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={OtherSwitch}
                      value={isOther}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Community */}
        <View style={styles.subscriptionCardContainer}>
          <View style={styles.innerSubscriptionCardContainer}>
            <View style={styles.innerSubscriptionCardTextContainer}>
              <Text style={styles.areaTextTitle}>JOIN OUR COMMUNITY</Text>
              <View style={styles.areaTextContainer}>
                <View style={styles.areaRow}>
                  <View style={styles.rowIdentificationNewRow}>
                    <Image
                      style={styles.rowIdentificationImageNewRowSocialIcon}
                      source={require("../../assets/images/iconsapp/logos_telegram.png")}
                    />
                    <Text style={styles.identificationTextWhite}>Telegram</Text>
                  </View>
                </View>

                <View style={styles.areaRowLast}>
                  <View style={styles.rowIdentificationNewRow}>
                    <Image
                      style={styles.rowIdentificationImageNewRowSocialIcon}
                      source={require("../../assets/images/iconsapp/discord.png")}
                    />
                    <Text style={styles.identificationTextWhite}>Discord</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Follow Us */}
        <View style={styles.subscriptionCardContainer}>
          <View style={styles.innerSubscriptionCardContainer}>
            <View style={styles.innerSubscriptionCardTextContainer}>
              <Text style={styles.areaTextTitle}>FOLLOW US</Text>
              <View style={styles.areaTextContainer}>
                <View style={styles.areaRow}>
                  <View style={styles.rowIdentificationNewRow}>
                    <Image
                      style={styles.rowIdentificationImageNewRowSocialIcon}
                      source={require("../../assets/images/iconsapp/fb.png")}
                    />
                    <Text style={styles.identificationTextWhite}>Facebook</Text>
                  </View>
                </View>
                <View style={styles.areaRow}>
                  <View style={styles.rowIdentificationNewRow}>
                    <Image
                      style={styles.rowIdentificationImageNewRowSocialIcon}
                      source={require("../../assets/images/iconsapp/ig.png")}
                    />
                    <Text style={styles.identificationTextWhite}>
                      Instagram
                    </Text>
                  </View>
                </View>
                <View style={styles.areaRow}>
                  <View style={styles.rowIdentificationNewRow}>
                    <Image
                      style={styles.rowIdentificationImageNewRowSocialIcon}
                      source={require("../../assets/images/iconsapp/twitter.png")}
                    />
                    <Text style={styles.identificationTextWhite}>Twitter</Text>
                  </View>
                </View>
                <View style={styles.areaRowLast}>
                  <View style={styles.rowIdentificationNewRow}>
                    <Image
                      style={styles.rowIdentificationImageNewRowSocialIcon}
                      source={require("../../assets/images/iconsapp/share.png")}
                    />
                    <Text style={styles.identificationTextWhite}>
                      Share this app
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <View style={styles.internalFooterContainer}>
            <Image
              style={styles.footerIcon}
              source={require("../../assets/images/iconsapp/footeronion.png")}
            />
            <Text style={styles.footerText}>
              © 2023 All Rights Reserved | Onion Technologies
            </Text>
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
  internalFooterContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  footerContainer: {
    width: "100%",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  footerIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  footerText: {
    fontSize: 12,
    // marginHorizontal: 20,
    // fontWeight: "bold",
    color: "#ffffff",
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
    paddingBottom: 10,
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

    borderRadius: 15,
  },
  areaRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#277676",
  },
  areaRowLast: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  rowTitle: {
    color: "#ffffff",
    width: "50%",
    fontSize: 12,
    fontWeight: "600",
  },
  rowIdentification: {
    width: "50%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 4,
    justifyContent: "flex-end",
  },
  rowIdentificationImage: {
    width: 12,
    height: 10,
    resizeMode: "contain",
  },
  identificationText: {
    color: "#F4B41A",
    fontSize: 12,
    textAlign: "right",
    fontWeight: "600",
  },
  rowIdentificationNewRow: {
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    // justifyContent:'flex-end'
  },
  rowIdentificationImageNewRowyellow: {
    width: 12,
    height: 12,
    resizeMode: "contain",
    tintColor: "#FF9900",
  },
  identificationTextYellow: {
    color: "#FF9900",
    fontSize: 12,
    fontWeight: "600",
  },
  identificationTextWhite: {
    color: "#FFFFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  rowIdentificationImageNewRowWhite: {
    width: 12,
    height: 12,
    resizeMode: "contain",
  },
  rowIdentificationImageNewRowSocialIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
