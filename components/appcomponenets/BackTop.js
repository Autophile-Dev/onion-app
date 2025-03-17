import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const backTop = () => {
  const navigation = useNavigation(); // Access the navigation object

  const handleProfileClick = () => {
    navigation.navigate("profile"); // Navigate to the "profile" screen
  };
  const handleNotificationClick = () => {
    navigation.navigate("notification"); // Navigate to the "profile" screen
  };
  return (
    <View style={styles.TopBarContainer}>
      <TouchableOpacity onPress={handleProfileClick}>
        <Image
          style={styles.ImageSize}
          source={require("../../assets/images/iconsapp/back.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNotificationClick}>
        <Image
          style={styles.ImageSizeNotif}
          source={require("../../assets/images/iconsapp/faq.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  TopBarContainer: {
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ImageSize: {
    width: 24,
    height: 24,
  },
  ImageSizeNotif: {
    width: 28,
    height: 24,
    resizeMode: "contain",
  },
});

export default backTop;
