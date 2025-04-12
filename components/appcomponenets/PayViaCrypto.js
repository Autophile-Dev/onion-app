import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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

const PayViaCrypto = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.SubscriptionText}>Pay via Crypto</Text>
        <View style={styles.cryptoPaymentTiles}>
          <View style={styles.rowTiles}>
            <View style={styles.rowTile}>
              <Text style={styles.tileTitle}>Per Month</Text>
              <Text style={styles.tilePrice}>9.99</Text>
              <Text style={styles.tileUnit}>USDT</Text>
            </View>
            <View style={styles.rowTile}>
              <Text style={styles.tileTitle}>Per 3 Months</Text>
              <Text style={styles.tilePrice}>24.99</Text>
              <Text style={styles.tileUnit}>USDT</Text>
            </View>
            <View style={styles.rowTile}>
              <Text style={styles.tileTitle}>Per Year</Text>
              <Text style={styles.tilePrice}>89.99</Text>
              <Text style={styles.tileUnit}>USDT</Text>
            </View>
          </View>
          <View style={styles.rowTiles}>
            <View style={styles.rowTileBottom}>
              <Text style={styles.tileTitle}>Life Time Subscription</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.tilePrice}>299</Text>
                <Text style={styles.tileUnit}>USDT</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.copyAddressContainer}>
          <View style={styles.copyAddressContainerInner}>
            <Text style={styles.addressText}>USDT (TRC-20) Address:</Text>
            <View style={styles.copyContainer}>
              <Text style={styles.addressTextWhite}>
                TAQ6DvZiTZ7ske6MMxDKMEJhcppY2fWYh5
              </Text>
              <Image
                source={require("../../assets/images/iconsapp/clipboard.png")}
                style={styles.listIconColor}
              />
            </View>
          </View>
        </View>
        <View style={styles.questions}>
          <Text style={styles.questionText}>How to Pay via Crypto?</Text>
          <View style={styles.answerListContainer}>
            <View style={styles.listAnswer}>
              <Text style={styles.points}>1.</Text>
              <Text style={styles.pointList}>
                Copy USDT (TRC-20) address mentioned above.
              </Text>
            </View>
            <View style={styles.listAnswer}>
              <Text style={styles.points}>2.</Text>
              <Text style={styles.pointList}>
                Go to your exchange/wallet and chose “Withdraw”.
              </Text>
            </View>
            <View style={styles.listAnswer}>
              <Text style={styles.points}>3.</Text>
              <Text style={styles.pointList}>
                Select USDT (Tron Network or TRC20) and paste address you copied
                from above.
              </Text>
            </View>
            <View style={styles.listAnswer}>
              <Text style={styles.points}>4.</Text>
              <Text style={styles.pointList}>
                Enter an amount corresponding to above subscription plans.
                (i.e., 10, 25, 90 or 300 USDT).
              </Text>
            </View>
            <View style={styles.listAnswer}>
              <Text style={styles.points}>5.</Text>
              <Text style={styles.pointList}>
                Make a transaction and wait for its approval.
              </Text>
            </View>
            <View style={styles.listAnswer}>
              <Text style={styles.points}>6.</Text>
              <Text style={styles.pointList}>
                You’ll get a transaction ID (TXID or transaction hash).
              </Text>
            </View>
            <View style={styles.listAnswer}>
              <Text style={styles.points}>7.</Text>
              <Text style={styles.pointList}>
                Paste your transaction ID down below.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.IDContainer}>
          <Text style={styles.txTitle}>Your TXID:</Text>
          <TextInput
            placeholderTextColor="#77ADAD"
            placeholder="Paste here"
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.bottomText}>
          After verification of your payment, your subscription will be
          automatically updated within 1-6 hours.
        </Text>
        <View style={styles.linksContainer}>
          <Link style={styles.linkText} href="/">
            Terms & Conditions | EULA
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default PayViaCrypto;

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
  cryptoPaymentTiles: {
    marginVertical: 20,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 20,
  },
  rowTiles: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // gap: 10,
  },
  rowTile: {
    width: "32%",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  tileTitle: {
    color: "#1C4C4C",
    fontSize: 14,
    fontWeight: "medium",
  },
  tilePrice: {
    color: "#1C4C4C",
    fontSize: 32,
    fontWeight: "bold",
  },
  tileUnit: {
    color: "#1C4C4C",
    fontSize: 20,
    fontWeight: "bold",
  },
  rowTileBottom: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  priceContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "baseline",
  },
  copyAddressContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingVertical: 20,
    paddingHorizontal: 20,
    // backgroundColor: "#ffffff",
  },
  copyAddressContainerInner: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    gap: 4,
    backgroundColor: "#1E5A5A",
  },
  addressText: {
    color: "#FF9900",
    fontSize: 16,
    fontWeight: "bold",
  },
  copyContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 8,
  },
  addressTextWhite: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "normal",
    // width: "100%",
  },
  listIconColor: {
    width: 15,
    height: 18,
    resizeMode: "contain",
  },
  questions: {
    marginVertical: 20,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    gap: 7,
  },
  questionText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  answerListContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    paddingTop: 7,
    // paddingHorizontal: 20,
    // backgroundColor: "#ffffff",
    // borderRadius: 15,
  },
  listAnswer: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "normal",
    maxWidth: "90%",
  },
  points: {
    fontSize: 13,
    color: "#ffffff",
    fontWeight: "normal",
  },
  pointList: {
    fontSize: 13,
    color: "#ffffff",
    fontWeight: "normal",
    maxWidth: "86%",
  },
  IDContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    gap: 7,
    // paddingVertical: 20,
    paddingHorizontal: 20,
  },
  txTitle: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  textInput: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#1E5A5A",
    borderRadius: 5,
    fontSize: 16,
    color: "#77ADAD",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  submitButton: {
    backgroundColor: "#FF9900",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "120",
    // height: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomText: {
    fontSize: 12,
    color: "#77ADAD",
    fontWeight: "normal",
    paddingHorizontal: 20,
    marginTop: 6,
    // textAlign: "center",
  },
  linksContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 30,
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
