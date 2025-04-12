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
import SubscriptionCard from "./SubscriptionCard";
import { Link } from "expo-router";
const Subscription = () => {
  const navigation = useNavigation();
  const subscriptionData = [
    {
      id: "1",
      title: "Monthly",
      subtitle: "month",
      price: "9.99",
      message: "Renews automatically on monthly basis",
    },
    {
      id: "2",
      title: "Quarterly",
      subtitle: "quarter",
      price: "24.99",
      message: "Renews automatically on quarterly basis",
    },
    {
      id: "3",
      title: "Yearly",
      subtitle: "year",
      price: "50.99",
      message: "Renews automatically on yearly basis",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.SubscriptionText}>Subscription</Text>
          <View style={styles.ScrollCradsContainer}>
            <View style={styles.InnerScrollCradsContainer}>
              <FlatList
                horizontal
                data={subscriptionData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SubscriptionCard data={item} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ columnGap: 10 }}
              />
            </View>
          </View>
          <View style={styles.features}>
            <View style={styles.featureList}>
              <Image
                source={require("../../assets/images/iconsapp/faq.png")}
                style={styles.listIconColor}
              />
              <Text style={styles.listText}>Priority Support</Text>
            </View>
            <View style={styles.featureList}>
              <Image
                source={require("../../assets/images/iconsapp/signals.png")}
                style={styles.listIconColor}
              />
              <Text style={styles.listText}>Get Premium Trading Signals</Text>
            </View>
            <View style={styles.featureList}>
              <Image
                source={require("../../assets/images/iconsapp/Icon_Notif.png")}
                style={styles.listIconColor}
              />
              <Text style={styles.listText}>Priority Notifications</Text>
            </View>
            <View style={styles.featureList}>
              <Image
                source={require("../../assets/images/iconsapp/mask.png")}
                style={styles.listIconColor}
              />
              <Text style={styles.listText}>Market Analysis</Text>
            </View>
          </View>
          <View style={styles.linksContainer}>
            <Link style={styles.linkText} href="/payviacrypto">Want to pay via crypto?</Link>
            <Link style={styles.linkText} href="/">Terms & Conditions | EULA</Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 20,
  },
  SubscriptionText: {
    fontSize: 20,
    marginHorizontal: 20,
    fontWeight: "bold",
    color: "#ffffff",
    // backgroundColor: "#000000",
  },
  ScrollCradsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    // paddingVertical: 20,
    paddingLeft: 20,
    // paddingRight: 20,
    // backgroundColor: "#000000",
  },
  InnerScrollCradsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // paddingRight:20,
    // paddingVertical: 20,
    gap: 10,
    // backgroundColor: "#DA7878FF",
  },
  features: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  featureList: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  listIconColor: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "#FF9900",
  },
  listText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "500",
  },
  linksContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 330,
    paddingHorizontal: 20,
    gap: 4,
  },
  linkText: {
    fontSize: 16,
    color: "#FF9900",
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});
