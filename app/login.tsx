import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function login() {
  return (
    <View style={styles.container}>
      <View style={styles.titlePage}>
        <Text style={styles.title}>Welcome Onboard</Text>
      </View>
      {/* Image Container Logo */}
      <View style={styles.ImageContainer}>
        <Image
          style={styles.ImageSize}
          source={require("../assets/images/splash-icon.png")}
        />
      </View>
      {/* Sign In Content */}
      <View style={styles.SignInContent}>
        {/* Sign In Title Continer */}
        <View>
          <Text style={styles.SignInTitle}>Sign In</Text>
          <Text style={styles.signInSubTitle}>Please Sign In to continue</Text>
        </View>
        {/* Input Container */}
        <View style={styles.InputContainer}>
          <TextInput
            placeholderTextColor="#77ADAD"
            placeholder="Email"
            style={styles.inputField}
          />
          {/* <Text style={styles.inputError}>Enter valid email</Text> */}
          <TextInput
            secureTextEntry={true}
            placeholderTextColor="#77ADAD"
            style={styles.passwordField}
            placeholder="Password"
          />
          {/* <Text style={styles.inputError}>Enter password</Text> */}
        </View>
        {/* Forgot Password Link */}
        <View style={styles.ForgotPasswordContainer}>
          <Text style={styles.forgetText}>Forget Password?</Text>
        </View>
        {/* Buttons Container */}
        <View>
          <Link href='/(tabs)'
            style={styles.NormalButton}
          >
            <Text style={styles.NormalButtonText}>SIGN IN</Text>
          </Link>
          {/* Option */}
          <Text style={styles.optionText}>-OR YOU CAN ALSO-</Text>
          <TouchableOpacity style={styles.GoogleButton}>
            <Image
              style={styles.googleIcon}
              source={require("../assets/images/iconsapp/google.png")}
            />
            <Text style={styles.GoogleButtonText}>SIGN IN WITH GOOGLE</Text>
          </TouchableOpacity>
        </View>
        {/* Register Account option */}
        <Link href='/registration'
          style={styles.RegisterOption}
        >
          Create a New Account
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c4d4d",
  },
  titlePage: {
    paddingTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F3F3F3",
    marginBottom: 20,
  },
  ImageContainer: {
    paddingVertical: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageSize: {
    width: 166,
    height: 225,
  },
  SignInContent: {
    paddingBottom: 28,
    paddingHorizontal: 28,
  },
  SignInTitle: {
    fontSize: 26,
    color: "#F3F3F3",
    fontWeight: "bold",
  },
  signInSubTitle: {
    marginTop: 2,
    fontSize: 16,
    color: "#F3F3F3",
  },
  InputContainer: {
    paddingTop: 24,
  },
  inputField: {
    color: "#77ADAD",
    borderRadius: 10,
    fontSize: 14,
    paddingVertical: 10,
    backgroundColor: "#1E5A5A",
    paddingHorizontal: 8,
  },
  passwordField: {
    color: "#77ADAD",
    borderRadius: 10,
    fontSize: 14,
    paddingVertical: 10,
    backgroundColor: "#1E5A5A",
    marginTop: 12,
    paddingHorizontal: 8,
  },
  inputError: {
    color: "#F36363FF",
    marginTop: 4,
  },
  ForgotPasswordContainer: {
    paddingVertical: 10,
    justifyContent: "flex-end",
    // backgroundColor: "#77ADAD",
  },
  forgetText: {
    fontSize: 14,
    color: "#FF9900",
    textAlign: "right",
  },
  NormalButton: {
    paddingVertical: 14,
    borderRadius: 10,
    textAlign:'center',
    backgroundColor: "#FF9900",
  },
  NormalButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  optionText: {
    color: "#ffffff",
    fontWeight: "medium",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 12,
  },
  GoogleButton: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    width: "100%",
    gap: 76,
  },
  googleIcon: {
    width: 19,
    height: 21,
  },
  GoogleButtonText: {
    color: "#257B7B",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  RegisterOption: {
    marginTop: 14,
    color: "#FF9900",
    textAlign: "center",
    fontSize: 14,
  },
});