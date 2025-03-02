import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import NewsAPI from "@/services/newsAPI";
import DashboardNews from "./dashboardNews";
const TopNews = ({ refreshing }) => {
  const [topNews, setTopNews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [NewsLoading, setNewsLoading] = useState(true);
  const news_fetch = async () => {
    setNewsLoading(true)
    try {
      const res = await NewsAPI.top5LatestNews();
      const filteredData =
        res?.data?.Data?.filter(
          (item) => item?.source_info?.name !== "CoinGape"
        ) || [];

      setTopNews(filteredData);
      // console.log(topNews);
    } catch (error) {
      console.error("Error fetching top news:", error);
      setTopNews([]); // Set empty array on error
    }
    setNewsLoading(false)
  };

  useEffect(() => {
    const fetchData = () => {
      news_fetch();
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (refreshing) {
      news_fetch(); // Fetch when refreshing changes
      console.log("Top News Reload")
    }
  }, [refreshing]);
  return (
    <View>
      {NewsLoading ? (
        <ActivityIndicator size="large" color="#FF9900"/>
      ) : topNews.length > 0 ? (
        <FlatList
          horizontal
          contentContainerStyle={{ columnGap: 12 }}
          showsHorizontalScrollIndicator={false}
          key={(item) => item.id}
          keyExtractor={(item) => item.id}
          data={topNews}
          renderItem={({ item }) => <DashboardNews item={item} />}
        />
      ) : (
        <Text style={{ color: "#FF0000FF" }}>No Data Available</Text>
      )}
    </View>
  );
};

export default TopNews;

const styles = StyleSheet.create({});
