import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

export default function DashboardNews({ item }) {
  return (
    <View style={styles.BoxContainer}>
      <ImageBackground
        source={{ uri: item.imageurl }}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 15, opacity: 0.4 }}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text numberOfLines={2} style={styles.titleContent}>{item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  BoxContainer: {
    width: 200,
    height: 130,
    borderRadius: 15,
    overflow: "hidden", // Ensures borderRadius applies to children
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", // Align text at the bottom
  },
  overlay: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better readability
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  titleContent: {
    fontSize: 13,
    color: "#ffffff",
    fontWeight:'semibold'
  },
});
