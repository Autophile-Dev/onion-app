import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SubscriptionCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${data.price}/</Text>
        <Text style={styles.subtitle}>{data.subtitle}</Text>
      </View>
      <Text style={styles.message}>{data.message}</Text>
      <TouchableOpacity style={styles.Subscribebutton}>
        <Text style={styles.subscriptionText}>SUBSCRIBE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubscriptionCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 4,
    backgroundColor: "#FFFFFFFF",
    width: 280,
    // height: 100,
    borderRadius: 15,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "medium",
    color: "#1C4C4C",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "baseline",
    // gap: 4,
  },
  price: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#1C4C4C",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#7A7A7A",
  },
  message: {
    fontSize: 11,
    fontWeight: "normal",
    color: "#1C4C4C",
    // marginTop: 10,
  },
  Subscribebutton: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    // alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#1C4C4C",
  },
  subscriptionText:{
    fontSize: 20,
    fontWeight: "medium",
    color: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});

