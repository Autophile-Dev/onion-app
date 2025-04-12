import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import CoinAPI from "@/services/coin_API";
import TopCoin from "./TopCoin";
const TopGainers = ({refreshing}) => {
  const [refresh, setRefresh] = useState(false);
  const [topGainerCoins, setTopGainersCoins] = useState([]);
  const [topLoserCoins, setTopLoserCoins] = useState([]);
  const [CoinLoading, setCoinLoading] = useState(true);
  const fetchTopGainerCoins = async () => {
    setCoinLoading(true);
    try {
      const res = await CoinAPI.top_10_coins();
      //   console.log("API Response:", res?.data.Data); // Log full response

      const allCoins = res?.data?.Data || [];

      if (!Array.isArray(allCoins) || allCoins.length === 0) {
        console.warn("No coin data available.");
        setTopGainersCoins([]);
        setTopLoserCoins([]);
        return;
      }

      const gainers = allCoins
        .filter((coin) => coin?.RAW?.USD?.CHANGEPCT24HOUR > 0)
        .sort((a, b) => b.RAW.USD.CHANGEPCT24HOUR - a.RAW.USD.CHANGEPCT24HOUR);

      const losers = allCoins
        .filter((coin) => coin?.RAW?.USD?.CHANGEPCT24HOUR <= 0)
        .sort((a, b) => a.RAW.USD.CHANGEPCT24HOUR - b.RAW.USD.CHANGEPCT24HOUR);

      setTopGainersCoins(gainers);
      setTopLoserCoins(losers);
    } catch (error) {
      console.error("Error fetching top gainer and loser coins:", error);
    }
    setCoinLoading(false);
  };

  useEffect(() => {
    const fetchData = () => {
      fetchTopGainerCoins();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (refreshing) {
      fetchTopGainerCoins(); // Fetch when refreshing changes
      console.log("Top Gainer Reload")
    }
  }, [refreshing]);
  
  return (
    <View>
      {CoinLoading ? (
        <ActivityIndicator size="large" color="#FF9900"/>
      ) : topGainerCoins.length > 0 ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: 12 }}
          keyExtractor={(item) => item?.CoinInfo?.id}
          data={topGainerCoins}
          renderItem={({ item }) => <TopCoin item={item} />}
        />
      ) : (
        <Text style={{ color: "#FF0000FF" }}>No Data Available</Text>
      )}
    </View>
  );
};

export default TopGainers;

const styles = StyleSheet.create({});
