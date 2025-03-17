import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { Chart, Line, VerticalAxis } from "react-native-responsive-linechart";
const CoinCard = ({ item }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartError, setChartError] = useState(false);

  if (!item || !item.CoinInfo || !item.RAW || !item.RAW.USD) {
    return null;
  }
  const fullName = item?.CoinInfo?.FullName ?? "Unknown Coin";
  const internal = item?.CoinInfo?.Internal ?? "N/A";
  const price = item?.RAW?.USD?.PRICE?.toFixed(2) ?? "0.00";
  // const priceChangePercentage7d = 1;
  const priceChangePercentage7d = item?.RAW?.USD?.CHANGEPCT24HOUR ?? 0;

  const priceChangeColor =
    priceChangePercentage7d > 0 ? "#56FF86FF" : "#FF4D4D";

  // const chartDataInternal=[
  //   {value:14},
  //   {value:15},
  //   {value:16},
  //   {value:15},
  //   {value:15},
  //   {value:16},
  //   {value:14},
  //   {value:13},
  //   {value:14},
  //   {value:14},
  // ]

  useEffect(() => {
    const fetchChartData = async () => {
      if (!internal) return;
      setLoading(true);
      setChartError(false);
      try {
        const response = await axios.get(
          `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${internal}&tsym=USD&limit=24`
        );
        const data = response.data.Data.Data;
        if (!data || data.length === 0) {
          setChartError(true);
          return;
        }
        const formattedData = data.map((point, index) => ({
          x: index,
          y: point.close || 0,
        }));
        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setChartError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [internal]);

  return (
    <LinearGradient
      style={styles.mainCard}
      colors={
        priceChangePercentage7d > 0
          ? ["#242424FF", "#00FF4860"]
          : ["#242424FF", "#FF4D4D34"]
      }
    >
      <View style={styles.CoinTopInfo}>
        <View style={styles.coinInfo}>
          <View style={styles.coinImage}>
            <Image
              source={{
                uri: "https://www.cryptocompare.com" + item.CoinInfo.ImageUrl,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.coinNames}>
            <View>
              <Text style={styles.coinName}>{fullName}</Text>
            </View>
            <View>
              <Text style={styles.coinSymbol}>{internal}</Text>
            </View>
          </View>
        </View>
        <View style={styles.CoinPrices}>
          <View style={styles.priceChangeContainer}>
            {priceChangePercentage7d > 0 ? (
              <Image
                style={styles.indicateIcon}
                source={require("../../assets/images/iconsapp/up.png")}
              />
            ) : (
              <Image
                style={styles.indicateIcon}
                source={require("../../assets/images/iconsapp/down.png")}
              />
            )}
            <Text style={[styles.priceChange, { color: priceChangeColor }]}>
              {priceChangePercentage7d.toFixed(2)}%
            </Text>
          </View>
          <Text style={styles.coinPrice}>$ {price}</Text>
        </View>
      </View>

      {/* Chart */}
      {/* <View style={styles.chartContainer}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : chartError ? (
          <Text style={{ color: '#ffffff', fontSize: 12 }}>Chart unavailable</Text>
        ) : chartData.length > 0 ? (
          <View style={{ height: 100, width: 180 }}>
            <Chart
              style={{ height: 100, width: 180 }}
              data={chartData}
              padding={{ left: 10, bottom: 20, right: 0, top: 10 }}
            >
              <VerticalAxis
                includeOriginTick={false}
                tickValues={[]}
                theme={{ axis: { visible: false }, labels: { visible: false } }}
              />
              <Line
                theme={{
                  stroke: {
                    color: priceChangePercentage7d > 0 ? "#56FF86FF" : "#FF4D4D",
                    width: 3,
                  },
                }}
              />
            </Chart>
          </View>
        ) : null}
      </View> */}
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  mainCard: {
    width: "100%",
    // marginHorizontal:20,
    backgroundColor: "#242424",
    borderRadius: 15,
    // padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingTop: 14,
    height: 120,
  },
  CoinTopInfo: {
    // paddinH: 16,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
  },
  chartContainer: {
    position: "absolute",
    top: 15,
    left: 120,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },
  coinInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  coinImage: {
    width: 40,
    height: 40,
  },
  coinNames: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  coinName: {
    alignItems: "center",
    fontSize: 20,
    color: "#ffffff",
  },
  coinSymbol: {
    alignItems: "center",
    fontSize: 12,
    color: "#ffffff",
  },
  image: {
    width: "100%", // Ensure the image takes full width of its container
    height: "100%", // Ensure it scales correctly
  },
  CoinPrices: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: 12,
  },
  coinPrice: {
    fontSize: 20,
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
    width: 12,
    height: 10,
  },
});
export default CoinCard;
