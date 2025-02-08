import { Image, StyleSheet, Platform, Text, View, ScrollView, TouchableOpacity, Dimensions, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from "../../components/appcomponenets/TopBar"
import Greetings from "../../components/appcomponenets/Greetings";
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'expo-router';
import CoinCard from "../../components/appcomponenets/CoinCard";
import TopCoin from "../../components/appcomponenets/TopCoin";
import CoinAPI from "@/services/coin_API";

type CoinAPIResponse = {
  data: {
    Data: CoinType[];
  };
};
type CoinType = {
  CoinInfo: {
    id: string;
  };
  RAW: {
    USD: {
      CHANGEPCT24HOUR: number;
    };
  };
};
export default function HomeScreen() {
  const [isSelected, setIsSelected] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [firstCoin, setFirstCoin] = useState<CoinType | null>(null);
  const [firstCoinLoading, setFirstCoinLoading] = useState(true);
  const [top5Coins, setTop5Coins] = useState<CoinType[]>([]);
  const [top5CoinsLoading, setTop5CoinsLoading] = useState(true);

  const [topGainersCoins, setTopGainersCoins] = useState<CoinType[]>([]);
  const [topGainerLoading, setTopGainerLoading] = useState(true);

  const [topLosersCoins, setTopLosersCoins] = useState<CoinType[]>([]);
  const [topLosersLoading, setTopLosersLoading] = useState(true);
  const fetchCoinData = async () => {
    setFirstCoinLoading(true);
    try {
      const res = await CoinAPI.first_coin();
      const typedRes = res as CoinAPIResponse;
      if (typedRes?.data?.Data?.length) {
        setFirstCoin({ ...typedRes.data.Data[0] }); // Cloning the object
      }
    } catch (error) {
      console.error("Error fetching first coin:", error);
    }
    setFirstCoinLoading(false);
  };

  const fetchTop5CoinsData = async () => {
    setTop5CoinsLoading(true);
    try {
      const res = await CoinAPI.fetchTop5Coins();
      const typedRes = res as CoinAPIResponse;
      if (typedRes?.data?.Data) {
        setTop5Coins([...typedRes.data.Data.slice(1)]); // Cloning the array
      }
    } catch (error) {
      console.error("Error fetching top coins:", error);
    }
    setTop5CoinsLoading(false);
  };
  
  // const fetchTopGainerLoserCoins = async () => {
  //   setTopGainerLoading(true);
  // setTopLosersLoading(true);
  //   try {
  //     const res = await CoinAPI.top_10_coins();
  //     const typedRes = res as CoinAPIResponse; // Explicitly casting response type
  
  //     if (!typedRes?.data?.Data) {
  //       throw new Error("Invalid data structure received");
  //     }
  
  //     const allCoins: CoinType[] = typedRes.data.Data;
  
  //     const gainers = allCoins.filter((coin: CoinType) => coin.RAW.USD.CHANGEPCT24HOUR > 0);
  //     const losers = allCoins.filter((coin: CoinType) => coin.RAW.USD.CHANGEPCT24HOUR <= 0);
  
  //     gainers.sort((a: CoinType, b: CoinType) => b.RAW.USD.CHANGEPCT24HOUR - a.RAW.USD.CHANGEPCT24HOUR);
  //     losers.sort((a: CoinType, b: CoinType) => a.RAW.USD.CHANGEPCT24HOUR - b.RAW.USD.CHANGEPCT24HOUR);
  
  //     setTopGainersCoins(gainers);
  //     setTopLosersCoins(losers);
  //   } catch (error) {
  //     console.error("Error fetching top gainer and loser coins:", error);
  //   }
  //   setTopGainerLoading(false);
  //   setTopLosersLoading(false);
  // };

  const onRefresh = useCallback(() => {
    setRefresh(true);
    fetchCoinData();
    fetchTop5CoinsData();
    // fetchTopGainerLoserCoins();
    // news_fetch();
    setTimeout(() => {
      setRefresh(false);
    }, 5000);
  },[refresh]);
  useEffect(() => {
    fetchCoinData();
    fetchTop5CoinsData();
    // fetchTopGainerLoserCoins();
  }, []);
  return (
    <SafeAreaView style={styles.Container}>
    <TopBar />
    <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <Greetings/>
      {/* Link Cards */}
      <View style={styles.topCardContainer}>
        <View style={styles.topCardRow}>
          <Link href='/signals' style={{width:Dimensions.get("screen").width*0.3, height:96}} >
            <View style={styles.topCard}>
              <View>
                <Text style={styles.cardTitle}>Signals</Text>
              </View>
              <View>
                <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/signal_new.png")} />
              </View>
            </View>
          </Link >
          <Link href='/explore' style={{width:Dimensions.get("screen").width*0.3, height:96}}>
          <View style={styles.topCard}>
            <View>
              <Text style={styles.cardTitle}>Explore</Text>
            </View>
            <View>
              <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/explore.png")} />
            </View>
          </View>
          </Link>
          <Link href="/login" style={{width:Dimensions.get("screen").width*0.3, height:96}}>
            <View style={styles.topCard}>
              <View>
                <Text style={styles.cardTitle}>Market</Text>
              </View>
              <View>
                <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/market.png")} />
              </View>
            </View>
          </Link>
        </View>
        <View style={styles.topCardRow}>
          <Link href="/login" style={{width:Dimensions.get("screen").width*0.3, height:96}}>
          <View style={styles.topCard}>   
            <View>
              <Text style={styles.cardTitleSubscription}>Subscription</Text>
            </View>
            <View>
              <Image style={styles.ImageCardSubscription} source={require("../../assets/images/iconsapp/subscription.png")} />
            </View>
          </View>
          </Link>
          <Link href='/coin' style={{width:Dimensions.get("screen").width*0.3, height:96}}>
            <View style={styles.topCard}>
              <View>
                <Text style={styles.cardTitle}>Coins</Text>
              </View>
              <View>
                <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/coins.png")} />
              </View>
            </View>
          </Link>
          <Link href='/coin' style={{width:Dimensions.get("screen").width*0.3, height:96}}>
            <View style={styles.topCard}>
              <View>
                <Text style={styles.cardTitle}>Reports</Text>
              </View>
              <View>
                <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/report.png")} />
              </View>
            </View>
          </Link>
        </View>
      </View>
      {/* Coins Main Part Dashboard */}
      <View style={styles.dashBoardMainCoin}>
        <View style={styles.contentTitlesContainer}>
          <View>
            <Text style={styles.TitleText}>Top Coins</Text>
          </View>
          <Link href="/coin" style={{color: '#FF9900', fontSize: 14}}>See All</Link>
        </View>
        {firstCoinLoading ? (
            <Text  style={{ color: '#FF9900' }}>Loading...</Text>
          ) : firstCoin ? (
            <CoinCard item={firstCoin} />
          ) : (
            <Text style={{ color: '#FF0000FF' }}>No Data Available</Text>
          )}
      </View>
      {/* top coins */}
      
      <View style={styles.top5CoinsContainer}>
        {top5CoinsLoading ? (
            <Text  style={{ color: '#FF9900' }}>Loading...</Text>
          ) : top5Coins.length > 0 ? (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ columnGap: 12 }}
              keyExtractor={(item) => item.CoinInfo.id}
              data={top5Coins}
              renderItem={({ item }) => <TopCoin item={item} />}
            />
          ) : (
            <Text style={{ color: '#FF0000FF' }}>No Data Available</Text>
          )}
      </View>

      {/* Top Gainers */}
      <View style={styles.TopGainerContainer}>
        <View style={styles.NewcontentTitlesContainer}>
            <View>
              <Text style={styles.TitleText}>Top Gainers</Text>
            </View>
            <Link href="/coin" style={{color: '#FF9900', fontSize: 14}}>See All</Link>
        </View>
        <View style={{paddingLeft:20}}>

          {/* {topGainerLoading ? (
              <Text style={{ color: '#FF9900' }}>Loading...</Text>
              ) : topGainersCoins.length > 0 ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ columnGap: 12 }}
                keyExtractor={(item) => item.CoinInfo.id}
                data={topGainersCoins}
                renderItem={({ item }) => <TopCoin item={item} />}
              />
            ) : (
              <Text style={{ color: '#FF0000FF' }}>No Data Available</Text>
          )} */}
        </View>
      </View>

      {/* Top Losers */}
      <View style={styles.TopGainerContainer}>
        <View style={styles.NewcontentTitlesContainer}>
            <View>
              <Text style={styles.TitleText}>Top Losers</Text>
            </View>
            <Link href="/coin" style={{color: '#FF9900', fontSize: 14}}>See All</Link>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  LoaderSmallContainer:{
    width:"100%",
    display:'flex',
    gap:12,
  },
  LoaderSmall:{
    width:144,
    borderRadius: 15,
    height: 86,
  },
  Container: {
    flex:1,
    backgroundColor:'#1c4d4d'
  },
  contentContainer:{
    paddingBottom:130,
  },
  topCardContainer:{
    display:'flex',
    flexDirection:'column',
    gap: 6,
    alignItems:'center',
    // paddingHorizontal:10,
  },
  topCardRow:{
    display:'flex',
    flexDirection:'row',
    gap:6,
    // justifyContent:'space-between'
  },
  topCard:{
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: Dimensions.get("screen").width * 0.3,
    height:96,
    borderRadius:15,
    backgroundColor:'#113838',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center',
    gap:10,
  },
  ImageCard:{
    width:30,
    height:30,
    resizeMode: "contain",
    // tintColor:'#FF9900'
  },
  ImageCardSubscription:{
    width:30,
    height:30,
    resizeMode: "contain",
    tintColor:'#FF9900'
  },
  cardTitle:{
    fontSize:14,
    color:'#ffffff'
  },
  cardTitleSubscription:{
     fontSize:14,
      color:'#FF9900'
  },
  dashBoardMainCoin:{
    marginTop:10,
    display:'flex',
    flexDirection:'column',
    paddingHorizontal:20,
    gap:10,
  },
  contentTitlesContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    // paddingHorizontal:20,
    alignItems:'center',
  },
  NewcontentTitlesContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    alignItems:'center',
  },
  TitleText:{
    fontSize:18,
    color:'#FFFFFF',
    fontWeight:'semibold',
  },
  top5CoinsContainer:{
    width: Dimensions.get('window').width + 40,
    paddingRight: 40,
    paddingLeft: 20,
    marginTop: 10,
  },
  Loader:{
    width:"100%",
    height:190,
    backgroundColor:"#246B6B",
    borderRadius:15,
  },
  TopGainerContainer:{
    marginTop:10,
    display:'flex',
    flexDirection:'column',
    // paddingLeft:20,
    gap:10,
  }
});