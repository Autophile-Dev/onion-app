import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Greetings = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getCurrentGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour < 12) {
        return "Good Morning";
      } else if (currentHour < 18) {
        return "Good Afternoon";
      } else {
        return "Good Evening";
      }
    };

    setGreeting(getCurrentGreeting());
  }, []); // Run once on component mount

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Greetings;
