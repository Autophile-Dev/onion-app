import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
function timeSince(unixTimestamp) {
  var date_timestamp = new Date(unixTimestamp * 1000);
  var today = new Date();
  var time_diff = (today - date_timestamp) / 1000;
  var aDay = time_diff * 1000;
  var date = new Date(Date.now() - aDay);

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
const ExploreNewsCard = ({ item, loading }) => {
  return (
    <Pressable style={styles.exploreNewsContainer}>
      <View style={styles.exploreLeft}>
        <Text numberOfLines={2} lineHeight={15} style={styles.newsTitle}>
          {item.title}
        </Text>
        <Text numberOfLines={4} lineHeight={15} style={styles.newDescription}>
          {item.body}
        </Text>
      </View>
      <View style={styles.exploreRight}>
        <Image style={styles.newsImage} source={{ uri: item.imageurl }} />
        <View style={styles.newsTime}>
          <Image
            style={styles.timeIconImage}
            source={require("../../assets/images/iconsapp/timer-green.png")}
          />
          <Text style={styles.timeNewsDuration}>
            {timeSince(item.published_on)} Ago
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExploreNewsCard;

const styles = StyleSheet.create({
  exploreNewsContainer: {
    marginHorizontal:20,
    display: "flex",
    flexDirection: "row",
    padding: 14,
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    height: 110,
    // width:"100%",
    // justifyContent: "space-between",
  },
  exploreLeft: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    width: "50%",
    justifyContent: "center",
    borderStyle:1,
  },
  exploreRight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "column",
    width: "50%",
    gap: 12,
  },
  newsTitle: {
    fontSize: 13,
    fontFamily: "Poppins",
    fontWeight: "700",
    color: "#242424",
  },
  newDescription: {
    fontSize: 11,
    fontFamily: "Poppins",
    color: "#242424",
  },
  newsImage: {
    width: 120,
    height: 70,
    resizeMode: "cover",
    borderRadius: 10,
  },
  newsTime: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    justifyContent: "flex-end",
  },
  timeIconImage: {
    width: 11,
    height: 11,
  },
  timeNewsDuration: {
    display: "flex",
    alignItems: "center",
    fontStyle: "italic",
    fontSize: 11,
    fontFamily: "Poppins",
    color: "#1C4C4C",
  },
});
