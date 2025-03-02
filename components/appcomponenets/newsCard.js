import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
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

const NewsCard = ({ item }) => {
  return (
    <View
      style={{
        position: "relative",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 8,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 15,
        marginVertical: 8,
      }}
    >
      <ImageBackground
        source={{ uri: item.imageurl }}
        resizeMode="cover"
        borderRadius={15}
        imageStyle={{ opacity: 0.7 }}
      >
        <Text
          mt="3"
          numberOfLines={2}
          style={{
            font: "#fff",
            fontSize: 14,
            fontFamily: "Poppins",
            color: "#fff",
            marginHorizontal: 15,
            marginTop: 14,
          }}
        >
          {item.title}
        </Text>
        <View
          style={{
            marginTop: 30,
            marginBottom: 8,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <Image
              style={{ width: 14, height: 14, marginLeft: 14 }}
              source={require("../../assets/images/iconsapp/white-time.png")}
            />
            <Text
              style={{
                font: "#fff",
                fontSize: 11,
                color: "#fff",
                marginLeft: 4,
                display: "flex",
                alignItems: "center",
                fontStyle: "italic",
              }}
            >
              {timeSince(item.published_on)} Ago
            </Text>
          </View>
          <Text
            style={{
              font: "#ffffff",
              fontSize: 11,
              color: "#FF9900",
              marginRight: 15,
              display: "flex",
              alignItems: "center",
              fontStyle: "italic",
              textAlign: "right",
            }}
          >
            {item?.source_info?.name}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({});
