import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MyPlans = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.MyPlanText}>My Plan</Text>
        <View style={styles.myPlansInfoContainer}>
          <Text style={styles.freeUserText}>
            You’re currently a{" "}
            <Text style={styles.premiumSubscriber}>Premium Subscriber</Text>{" "}
          </Text>
          <Text style={styles.whiteSub}>
            Your subscription will expire on December 31, 2099.
          </Text>
          {/* <TouchableOpacity onPress={() => navigation.navigate("subscription")}>
            <Text style={styles.premium}>Upgrade to Premium.</Text>
          </TouchableOpacity> */}
        </View>
        <Text style={styles.MyPlanText}>Subscription History</Text>
        <View style={styles.subscriptionHistoryList}>
          <View style={styles.subscribePoint}>
            <View style={styles.pointLeft}>
              <Text style={styles.subsciptionTitle}>Lifetime Subscription</Text>
              <Text style={styles.paidDate}>Subscribed on Mar 24, 2025</Text>
              <Text style={styles.expiryText}>
                Will expire on December 31, 2099
              </Text>
            </View>
            <View style={styles.pointRight}>
                <Text style={styles.priceText}>$299.99</Text>
                <Text style={styles.paidResText}>Paid via Crypto</Text>
            </View>
          </View>
          <View style={styles.subscribePoint}>
            <View style={styles.pointLeft}>
              <Text style={styles.subsciptionTitle}>Monthly Plan</Text>
              <Text style={styles.paidDate}>Subscribed on Apr 04, 2025</Text>
              <Text style={styles.expiryText}>
                Will expire on December 31, 2099
              </Text>
            </View>
            <View style={styles.pointRight}>
                <Text style={styles.priceText}>$9.99</Text>
                <Text style={styles.paidResText}>Paid via Google Play Store</Text>
            </View>
          </View>
           <View style={styles.subscribePoint}>
            <View style={styles.pointLeft}>
              <Text style={styles.subsciptionTitle}>Quarterly Plan</Text>
              <Text style={styles.paidDate}>Subscribed on Mar 24, 2025</Text>
              <Text style={styles.expiryText}>
                Will expire on December 31, 2099
              </Text>
            </View>
            <View style={styles.pointRight}>
                <Text style={styles.priceText}>$24.99</Text>
                <Text style={styles.paidResText}>Paid via Crypto</Text>
            </View>
          </View>
          <View style={styles.subscribePoint}>
            <View style={styles.pointLeft}>
              <Text style={styles.subsciptionTitle}>Premium Subscription</Text>
              <Text style={styles.paidDate}>Subscribed on Mar 24, 2025</Text>
              <Text style={styles.expiryText}>
                Will expire on December 31, 2099
              </Text>
            </View>
            <View style={styles.pointRight}>
                <Text style={styles.priceText}>$24.99</Text>
                <Text style={styles.paidResText}>Code Redeemed</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyPlans;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 20,
  },
  MyPlanText: {
    fontSize: 20,
    marginHorizontal: 20,
    fontWeight: "bold",
    color: "#ffffff",
    // backgroundColor: "#000000",
  },
  myPlansInfoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  freeUserText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  premium: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#FF9900",
  },
  premiumSubscriber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF9900",
  },
  whiteSub: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#FFFFFF",
  },
  subscriptionHistoryList: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  subscribePoint: {
    width: "100%",
    // height: 20,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 4,
    backgroundColor: "#1E5A5A",
    borderRadius: 5,
    // marginVertical: 10,
  },
  pointLeft: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    // alignItems: "center",
  },
  pointRight:{
    display: "flex",
    flexDirection: "column",
    gap: 3,
    alignItems: "flex-end",
  },
  subsciptionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FF9900",
  },
  paidDate: {
    fontSize: 11,
    fontWeight: "normal",
    color: "#ffffff",
  },
  expiryText: {
    fontSize: 11,
    fontWeight: "normal",
    color: "#FF4D4D",
  },
  priceText:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  paidResText:{
    fontSize: 11,
    fontWeight: "normal",
    color: "#ffffff",
  }
});
