import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import NewsAPI from "@/services/newsAPI";
import ExploreNewsCard from "./exploreNews";
import NewsCard from "./newsCard";
import Carousel, { Pagination } from "react-native-reanimated-carousel";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Dimensions.get("window").width;
const ExploreScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [exploreTop3News, setExploreTop3News] = useState([]);
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const [exploreTab, setExploreTab] = useState(0);
  const [newsTabs, setNewsTabs] = useState(0);
  const [topNews, setTopNews] = useState([]);
  const [topBTCNews, setTopBTCNews] = useState([]);
  const [topETHNews, setTopETHNews] = useState([]);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const navigation = useNavigation();
  useEffect(() => {
    top3NewsFetch();
    news_fetch();
    topBTC();
    topETH();
  }, []);
  const news_fetch = async () => {
    // loading here
    const res = await NewsAPI.latest_news();
    const filteredData = res?.data?.Data.filter(
      (item) => item?.source_info?.name !== "CoinGape"
    );
    setTopNews(filteredData);
    // end loading here
  };
  const topBTC = async () => {
    // start loading here
    const res = await NewsAPI.topBTCNews();
    const filteredData = res?.data?.Data?.filter(
      (item) => item?.source_info?.name !== "CoinGape"
    );
    setTopBTCNews(filteredData);
    // end loading here
  };
  const topETH = async () => {
    // start loading here
    const res = await NewsAPI.topETHNews();
    const filteredData = res?.data?.Data?.filter(
      (item) => item?.source_info?.name !== "CoinGape"
    );
    setTopETHNews(filteredData);
    // end loading here
  };
  const top3NewsFetch = async () => {
    setLoading(true);
    const res = await NewsAPI.latest_news();
    const filteredData =
      res?.data?.Data?.filter(
        (item) => item?.source_info?.name !== "CoinGape"
      ) || [];
    const topNews = filteredData.slice(0, 3);
    setExploreTop3News(topNews);
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.ExploreText}>Explore</Text>

        {/* Carousel News */}
        <View style={styles.CarouselContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#FF9900" />
          ) : (
            <View>
              <View>
                <Carousel
                  autoPlay={true}
                  autoPlayInterval={3000}
                  width={SLIDER_WIDTH}
                  windowSize={1}
                  itemWidth={ITEM_WIDTH}
                  ref={isCarousel}
                  data={exploreTop3News}
                  onSnapToItem={(index) => setIndex(index)}
                  renderItem={({ item }) => <ExploreNewsCard item={item} />}
                />
              </View>
            </View>
          )}
        </View>

        <View style={styles.tabsContainer}>
          <View style={styles.innerTabContainer}>
            <Pressable
              onPress={() => setExploreTab(0)}
              style={{
                display: "flex",
                backgroundColor: exploreTab === 0 ? "#FF9900" : "#FFFFFF",
                alignItems: "center",
                borderRadius: 7,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: exploreTab === 0 ? "#FFFF" : "#1E5A5A",
                  }}
                >
                  News
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => setExploreTab(1)}
              style={{
                display: "flex",
                backgroundColor: exploreTab === 1 ? "#FF9900" : "#FFFFFF",
                alignItems: "center",
                borderRadius: 7,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: exploreTab === 1 ? "#FFFF" : "#1E5A5A",
                  }}
                >
                  Market Updates
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => setExploreTab(2)}
              style={{
                display: "flex",
                backgroundColor: exploreTab === 2 ? "#FF9900" : "#FFFFFF",
                alignItems: "center",
                borderRadius: 7,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: exploreTab === 2 ? "#FFFF" : "#1E5A5A",
                  }}
                >
                  Learn
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        {/* Display news when clicks on news tab */}
        {exploreTab === 0 && (
          <>
            {/* News */}
            <View style={styles.newsContainer}>
              {/* News Tabs */}
              <View style={styles.newsTabsContainer}>
                <View style={styles.innerNewsTabsContainer}>
                  <Pressable
                    onPress={() => setNewsTabs(0)}
                    style={{
                      backgroundColor: newsTabs === 0 ? "#FF9900" : "#8B8B8B",
                      display: "flex",
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: "#FFFFFF",
                      alignItems: "center",
                      paddingVertical: 4,
                      paddingHorizontal: 12,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: "Poppins",
                        fontWeight: newsTabs === 0 ? "700" : "400",
                        color: "#FFFFFF",
                      }}
                    >
                      All
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setNewsTabs(1)}
                    style={{
                      backgroundColor: newsTabs === 1 ? "#FF9900" : "#8B8B8B",
                      display: "flex",
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: "#FFFFFF",
                      alignItems: "center",
                      paddingVertical: 4,
                      paddingHorizontal: 12,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: "Poppins",
                        fontWeight: newsTabs === 1 ? "700" : "400",
                        color: "#FFFFFF",
                      }}
                    >
                      BTC
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setNewsTabs(2)}
                    style={{
                      backgroundColor: newsTabs === 2 ? "#FF9900" : "#8B8B8B",
                      display: "flex",
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: "#FFFFFF",
                      alignItems: "center",
                      paddingVertical: 4,
                      paddingHorizontal: 12,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: "Poppins",
                        fontWeight: newsTabs === 2 ? "700" : "400",
                        color: "#FFFFFF",
                      }}
                    >
                      ETH
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>

            {/* Top News */}
            {newsTabs === 0 && (
              // Top News
              <View style={styles.topNewsContainer}>
                <FlatList
                  keyExtractor={(item) => item.id}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  data={topNews}
                  renderItem={({ item }) => <NewsCard item={item} />}
                />
              </View>
            )}
            {/* Top BTC */}
            {newsTabs === 1 && (
              <View style={styles.topNewsContainer}>
                <FlatList
                  keyExtractor={(item) => item.id}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  data={topBTCNews}
                  renderItem={({ item }) => <NewsCard item={item} />}
                />
              </View>
            )}
            {/* Top ETH */}
            {newsTabs === 2 && (
              <View style={styles.topNewsContainer}>
                <FlatList
                  keyExtractor={(item) => item.id}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  data={topETHNews}
                  renderItem={({ item }) => <NewsCard item={item} />}
                />
              </View>
            )}
          </>
        )}
        {exploreTab === 1 && (
          <>
            <View style={styles.marketUpdatesContainer}>
              <View style={styles.innerContainerUpdateMarket}>
                <Text
                  style={{
                    color: "#FF9900",
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  Upgrade your plan to access latest Market Updates.
                </Text>
                <Image
                  style={styles.lockStyle}
                  source={require("../../assets/images/iconsapp/lock.png")}
                />
                <Link style={styles.upgradeButton} href="/subscription">
                  <Text style={styles.buttonText}>Upgrade Plan</Text>
                </Link>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 20,
  },
  ExploreText: {
    fontSize: 20,
    marginHorizontal: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  CarouselContainer: {
    marginVertical: 12,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#ffffff",
    borderRadius: 15,

    // paddingHorizontal: 20,
    height: 110,
  },
  TopNewsContainerCardSkeleton: {
    width: "100%",
    height: 110,
    // paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  tabsContainer: {
    paddingHorizontal: 20,
    // marginVertical: 12,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  innerTabContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  newsContainer: {
    marginTop: 12,
    marginBottom: 6,
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  topNewsContainer: {
    // marginRight: 60,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingBottom: 80,
  },
  innerTabContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  newsTabsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  innerNewsTabsContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
  },
  marketUpdatesContainer: {
    display: "flex",
    marginTop: 10,
    flexDirection: "column",
    // backgroundColor: "#FFFFFFFF",
    width: "100%",
    paddingHorizontal: 20,
    height: "460",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainerUpdateMarket: {
    display: "flex",
    // backgroundColor: "#7B1919FF",
    // marginTop: 30,
    flexDirection: "column",
    width: "140",
    gap: 14,
    // width: 30,
    alignItems: "center",
    height: "auto",
  },
  lockStyle: {
    width: 43,
    height: 50,
  },
  upgradeButton: {
    backgroundColor: "#FF9900",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 7,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "medium",
  },
});
