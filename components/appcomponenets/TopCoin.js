import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { Chart, Line, VerticalAxis } from "react-native-responsive-linechart";

const TopCoin = ({ item }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Validate if item is properly structured
  if (!item || !item.CoinInfo || !item.RAW || !item.RAW.USD) {
    return null;
  }

  // Extract data from item
  const fullName = item.CoinInfo.FullName ?? "Unknown Coin";
  const internal = item.CoinInfo.Internal ?? "N/A";
  const price = item.RAW.USD.PRICE?.toFixed(2) ?? "0.00";
  const priceChangePercentage7dTopCoins = item.RAW.USD.CHANGEPCT24HOUR ?? 0;
  // const priceChangePercentage7dTopCoins = 1;
  const priceChangeColorTopCoins =
    priceChangePercentage7dTopCoins > 0 ? "#43DE6E" : "#FF4D4D";

  useEffect(() => {
    const fetchChartData = async () => {
      if (!internal) return;
      setLoading(true);
      try {
        const response = await axios.get(
          `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${internal}&tsym=USD&limit=24`
        );
        const data = response.data.Data.Data;
        const formattedData = data.map((point, index) => ({
          x: index,
          y: point.close, // Use closing price for the chart
        }));
        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [internal]); // Re-fetch data when the coin changes

  return (
    <LinearGradient
      colors={
        priceChangePercentage7dTopCoins > 0
          ? ["#242424FF", "#00FF4860"]
          : ["#242424FF", "#FF4D4D34"]
      }
      style={styles.container}
    >
      <View style={styles.chart}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Chart
            style={{ height: 50, width: 60 }}
            data={chartData}
            padding={{ left: 10, bottom: 20, right: 0, top: 10 }}
            // xDomain={{ min: -2, max: 10 }}
            // yDomain={{ min: -4, max: 20 }}
          >
            <VerticalAxis
              includeOriginTick={false}
              tickValues={false}
              theme={{ axis: { visible: false }, labels: { visible: false } }}
            />
            <Line
              theme={{
                stroke: {
                  color:
                    priceChangePercentage7dTopCoins > 0 ? "#43DE6E" : "#FF4D4D",
                  width: 2,
                },
              }}
            />
          </Chart>
        )}
      </View>

      <View style={styles.cardHeadContainer}>
        <View style={styles.headContentTop}>
          <Image
            style={styles.contentImage}
            source={{
              uri: "https://www.cryptocompare.com" + item.CoinInfo.ImageUrl,
            }}
          />
          <View style={styles.contentInfo}>
            <Text style={styles.coinTitle}>{fullName}</Text>
            <Text style={styles.coinSubtitle}>{internal}</Text>
          </View>
        </View>

        <View style={styles.headContentBottom}>
          <View style={styles.priceChangeContainer}>
            <Image
              style={styles.indicateIcon}
              source={
                priceChangePercentage7dTopCoins > 0
                  ? require("../../assets/images/iconsapp/up.png")
                  : require("../../assets/images/iconsapp/down.png")
              }
            />
            <Text
              style={[styles.priceChange, { color: priceChangeColorTopCoins }]}
            >
              {priceChangePercentage7dTopCoins.toFixed(2)}%
            </Text>
          </View>
          <Text style={styles.coinPrice}>$ {price}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242424",
    width: 144,
    borderRadius: 15,
    overflow: "hidden",
    height: 86,
  },
  cardHeadContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  headContentTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  headContentBottom: {
    marginTop: 10,
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  contentImage: {
    width: 25,
    height: 25,
  },
  contentInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  coinTitle: {
    fontSize: 12,
    color: "#ffffff",
  },
  coinSubtitle: {
    fontSize: 11,
    color: "#ffffff",
    marginTop: 2,
  },
  coinPrice: {
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "600",
    marginTop: 2,
  },
  priceChangeContainer: {
    marginTop: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  indicateIcon: {
    width: 7,
    height: 6,
  },
  priceChange: {
    fontSize: 11,
  },
  chart: {
    position: "absolute",
    top: 35,
    left: 60,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1, // Ensure the chart is behind the text
  },
});

export default TopCoin;
