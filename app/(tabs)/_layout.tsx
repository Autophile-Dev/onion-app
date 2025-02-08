import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        // tabBarLabelStyle:{color: Colors[colorScheme].tint ? '#FFFFFF' : '#FF9900'},
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            alignItem:'center',
          },
          default: {
            backgroundColor:'#0C2E2E',
            // display:'flex',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            position: 'absolute',
            height:80,
            
          },
        }),
      }}>
       <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarItemStyle:{
            top:14,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/iconsapp/home.png')}
              style={[
                styles.tabIcon,
                { tintColor: focused ? '#FF9900' : '#FFFFFF' },
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarItemStyle:{
            top:14,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/iconsapp/explore.png')}
              style={[
                styles.tabIcon,
                { tintColor: focused ? '#FF9900' : '#FFFFFF' },
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="signals"
        options={{
          title: 'Signals',
          tabBarItemStyle:{
            top:14,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/iconsapp/signal_new.png')}
              style={[
                styles.tabIcon,
                { tintColor: focused ? '#FF9900' : '#FFFFFF' },
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="coin"
        options={{
          title: 'Coins',
          tabBarItemStyle:{
            top:14,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/iconsapp/coins.png')}
              style={[
                styles.tabIcon,
                { tintColor: focused ? '#FF9900' : '#FFFFFF' },
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          title: 'Market',
          tabBarItemStyle:{
            top:14,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/iconsapp/market.png')}
              style={[
                styles.tabIcon,
                { tintColor: focused ? '#FF9900' : '#FFFFFF' },
              ]}
            />
          ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});