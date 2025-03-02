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
import CoinAPI from "@/services/coin_API";
// import { DataTable } from "react-native-paper";
import CoinList from "./coinList";
import { RefreshControl } from "react-native";
const CoinScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [alldata, setAlldata] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [toppers, setToppers] = useState(true);
  const [gainer, setGainer] = useState(false);
  const [loser, setLosers] = useState(false);
  const coin_fetch = async () => {
    const res = await CoinAPI.coin_volumes();
    setFilteredDataSource(res?.data.Data);
    setAlldata(res?.data.Data);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    coin_fetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  const topper = () => {
    setToppers(true);
    setGainer(false);
    setLosers(false);
    setFilteredDataSource(alldata);
    // console.log("Top Coins: ",filteredDataSource)
  };
  const gainers = () => {
    setToppers(false);
    setGainer(true);
    setLosers(false);
    var newArray = alldata?.filter(function (el) {
      return el?.RAW?.USD?.CHANGEPCT24HOUR > 0;
    });
    newArray.sort(
      (a, b) => b.RAW.USD.CHANGEPCT24HOUR - a.RAW.USD.CHANGEPCT24HOUR
    );
    newArray = newArray.filter((el) => el.RAW.USD.CHANGEPCT24HOUR > 0);
    setFilteredDataSource(newArray);
    // console.log("Top Gainers:", filteredDataSource)
  };
  const losers = () => {
    setToppers(false);
    setGainer(false);
    setLosers(true);
    var newArray = alldata?.filter(function (el) {
      return el?.RAW?.USD?.CHANGEPCT24HOUR <= 0;
    });
    newArray.sort(
      (a, b) => a.RAW.USD.CHANGEPCT24HOUR - b.RAW.USD.CHANGEPCT24HOUR
    );
    newArray = newArray.filter((el) => el.RAW.USD.CHANGEPCT24HOUR <= 0);
    setFilteredDataSource(newArray);
    // console.log("Top Losers:",filteredDataSource)
  };
  useEffect(() => {
    coin_fetch();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.CoinText}>Coins</Text>

        {/* Buttons */}
        <View style={styles.TabButtonsContainer}>
          <TouchableOpacity
            onPress={topper}
            style={{
              backgroundColor: toppers ? "#FF9900" : "#1E953F",
              paddingHorizontal: 8,
              paddingVertical: 6,
              borderRadius: 15,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ffffff",
              borderStyle: "solid",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                alignItems: "center",
                font: "#fff",
                fontSize: 11,
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              Top Coins
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={gainers}
            style={{
              backgroundColor: gainer ? "#FF9900" : "#1E953F",
              paddingHorizontal: 8,
              paddingVertical: 6,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#ffffff",
              borderStyle: "solid",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                font: "#fff",
                fontSize: 11,
                textAlign: "center",
                color: "#fff",
              }}
            >
              Top Gainers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={losers}
            style={{
              backgroundColor: loser ? "#FF9900" : "#1E953F",
              paddingHorizontal: 8,
              paddingVertical: 6,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#ffffff",
              borderStyle: "solid",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                font: "#fff",
                fontSize: 11,
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              Top Loosers
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.TableContainer}>
          <View style={styles.CoinTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.titleTable}>Name/Vol</Text>
              <Text style={styles.titleTable}>24h Change</Text>
              <Text style={styles.titleTable}>Current Price</Text>
            </View>
            <View style={styles.tableData}>
              {alldata.length > 1 ? (
                <FlatList
                  keyExtractor={(item) => item.CoinInfo.id}
                  data={filteredDataSource}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                  renderItem={({ item }) => <CoinList item={item} />}
                />
              ) : (
                <View>
                  <ActivityIndicator size="large" color="#FF9900"/>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CoinScreen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 20,
  },
  CoinText: {
    fontSize: 20,
    marginHorizontal: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  TabButtonsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginVertical: 14,
    paddingHorizontal: 20,
  },
  CoinTable: {
    borderWidth: 0,
    width: "100%",

    // paddingVertical: 14,
    // backgroundColor: "#ffffff",
    // paddingHorizontal: 20,
  },
  TableContainer: {
    width: "100%",
    // backgroundColor:'#2A0404FF',
    paddingHorizontal: 20,
  },
  titleTable: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  tableHeader: {
    // backgroundColor: '#DCDCDC',
    // borderWidth:0,
    width: "100%",
    color: "#ffffff",
    fontSize: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // tableData: {
  //   display: "flex",
  //   width: "100%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
});
