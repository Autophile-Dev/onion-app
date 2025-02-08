import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const TopBar = () => {
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
          source={require("../../assets/images/iconsapp/profile.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNotificationClick}>
        <Image
          style={styles.ImageSizeNotif}
          source={require("../../assets/images/iconsapp/Icon_Notif.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  TopBarContainer: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ImageSize: {
    width: 32,
    height: 32,
  },
  ImageSizeNotif: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

export default TopBar;
