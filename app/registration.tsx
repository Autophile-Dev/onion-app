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

const registration = () => {
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
          <View style={styles.SignInContent}>
            {/* Sign In Title Continer */}
            <View>
              <Text style={styles.SignInTitle}>Sign Up</Text>
              <Text style={styles.signInSubTitle}>
                Create a new account to continue
              </Text>
            </View>
            {/* Input Container */}
            <View style={styles.InputContainer}>
              <TextInput
                placeholderTextColor="#77ADAD"
                placeholder="Name"
                style={styles.inputField}
              />
              {/* <Text style={styles.inputError}>Enter name</Text> */}
              <TextInput
                placeholderTextColor="#77ADAD"
                placeholder="Email"
                style={styles.inputFieldMtop}
              />
              {/* <Text style={styles.inputError}>Enter valid email</Text> */}
              <TextInput
                placeholderTextColor="#77ADAD"
                placeholder="Username"
                style={styles.inputFieldMtop}
              />
              {/* <Text style={styles.inputError}>Enter valid email</Text> */}
              <TextInput
                secureTextEntry={true}
                placeholderTextColor="#77ADAD"
                style={styles.passwordField}
                placeholder="Password"
              />
              {/* <Text style={styles.inputError}>Enter password</Text> */}
              <TextInput
                secureTextEntry={true}
                placeholderTextColor="#77ADAD"
                style={styles.passwordField}
                placeholder="Confirm Password"
              />
              {/* <Text style={styles.inputError}>Enter password</Text> */}
            </View>
            <Link href='/login'
              style={styles.NormalButton}
              
              
            >
              <Text style={styles.NormalButtonText}>CREATE MY ACCOUNT</Text>
            </Link>
            <Text style={styles.RegisterOption}>
              Already have an account?{" "}
              <Link href='/login'
                style={styles.LoginOption}
              >
                Login
              </Link>{" "}
            </Text>
          </View>
        </View>
  )
}

export default registration

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
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageSize: {
    width: 126,
    height: 176,
  },
  SignInContent: {
    paddingBottom: 10,
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
    paddingTop: 14,
  },
  inputField: {
    color: "#77ADAD",
    borderRadius: 10,
    fontSize: 14,
    paddingVertical: 10,
    backgroundColor: "#1E5A5A",
    paddingHorizontal: 8,
  },
  inputFieldMtop: {
    color: "#77ADAD",
    borderRadius: 10,
    marginTop: 12,
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
  NormalButton: {
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: "#FF9900",
  },
  NormalButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  RegisterOption: {
    marginTop: 12,
    color: "#F3f3f3",
    textAlign: "center",
    fontSize: 14,
  },
  LoginOption: {
    color: "#FF9900",
    textAlign: "center",
    fontSize: 14,
  },
});