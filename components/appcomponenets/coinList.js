import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

const CoinList = ({ item }) => {
  const priceChangePercentage7d = item?.RAW?.USD?.CHANGEPCT24HOUR ?? 0;
  const priceChangeColor = priceChangePercentage7d > 0 ? "#43DE6E" : "#FF4D4D";

  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* Left side */}
        <View style={styles.leftWrapper}>
          <Image
            source={{
              uri: "https://www.cryptocompare.com" + item.CoinInfo.ImageUrl,
            }}
            style={styles.image}
          />
          <View style={styles.titlesWrapper}>
            <View style={styles.PriceContainer}>
              <Text style={styles.title}>{item?.CoinInfo?.Internal}</Text>
              <Text style={styles.unit}>/USD</Text>
            </View>

            <Text style={styles.subtitle}>
              Mkt. Cap {item?.DISPLAY?.USD?.MKTCAP?.slice(2)}{" "}
            </Text>
          </View>
        </View>

        {/* Center side */}
        <View style={styles.centerWrapper}>
          {priceChangePercentage7d > 0 ? (
            <Text style={{ color: priceChangeColor }}>UP</Text>
          ) : (
            <Text style={{ color: priceChangeColor }}>Down</Text>
          )}
        </View>

        {/* Right side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>{item?.DISPLAY?.USD?.PRICE}</Text>
          <Text style={[styles.subtitle, { color: priceChangeColor }]}>
            {priceChangePercentage7d
              ? priceChangePercentage7d.toFixed(2) + "%"
              : "N/A"}
          </Text>
        </View>
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  PriceContainer: {
    display: "flex",
    flexDirection: "row",
  },
  itemWrapper: {
    marginTop: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centerImage: {
    width: 65,
    height: 15,
    resizeMode: "center",
  },
  leftWrapper: {
    flexDirection: "row",
    // alignItems: 'center',
    width: "auto",
  },
  image: {
    height: 20,
    width: 20,
  },
  titlesWrapper: {
    marginLeft: 6,
  },
  title: {
    fontSize: 14,
    color: "#ffff",
    fontWeight: "bold",
  },
  unit: {
    fontSize: 14,
    color: "#BEBEBE",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    color: "#3CBEBE",
  },
  rightWrapper: {
    alignItems: "flex-end",
    paddingRight: 6,
    maxWidth: 70,
  },
  divider: {
    height: 1,
    backgroundColor: "#A9ABB1",
    marginTop: 16,
  },
});

export default CoinList;
