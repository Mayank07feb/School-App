import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Animated,
  SafeAreaView,
} from 'react-native';
import { MotiView } from 'moti';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const MainPage = ({ onContinue }) => {
  const backgroundOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backgroundOpacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1">
        {/* Gradient Background */}
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: backgroundOpacity,
          }}
        >
          <LinearGradient
            colors={["#3B7CB8", "#2C5E8F", "#1E3A8A"]}
            className="flex-1"
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        </Animated.View>

        {/* Status Bar */}
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

        {/* Content */}
        <View className="flex-1 justify-center items-center px-6">
          {/* Header */}
          <MotiView
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 700 }}
            className="mb-6"
          >
            <Text className="text-text-primary text-3xl font-bold text-center leading-10 tracking-tight">
              EduSync{"\n"}Management Platform
            </Text>
          </MotiView>

          {/* Description */}
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 900, delay: 400 }}
            className="mb-8"
          >
            <Text className="text-white text-lg text-center font-light leading-6 px-4">
              Transforming educational management with intelligent insights,
              comprehensive tracking, and seamless collaboration
            </Text>
          </MotiView>

          {/* Logo */}
          <MotiView
            from={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 900, delay: 600 }}
            className="mb-14"
          >
            <View className="bg-profile-background p-6 rounded-full border-3 border-white/25 shadow-lg shadow-black/25">
              <Ionicons name="school" size={90} color="#FFFFFF" />
            </View>
          </MotiView>

          {/* Continue Button */}
          <MotiView
            from={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 12,
              delay: 700,
            }}
            className="w-full"
          >
            <TouchableOpacity
              onPress={onContinue}
              activeOpacity={0.7}
              className="bg-primary py-4 px-11 rounded-xl items-center shadow-lg"
            >
              <Text className="text-text-primary text-lg font-bold uppercase tracking-wider">
                Start Journey
              </Text>
            </TouchableOpacity>
          </MotiView>
        </View>

        {/* Footer */}
        <View className="bg-secondary/15 rounded-xl py-3 px-4 mx-6 self-center mb-6 items-center border border-secondary/30">
          <View className="flex-row items-center">
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="#2C5E8F"
              className="mr-2"
            />
            <Text className="text-white text-sm font-semibold">
              v1.1 • Intelligent Educational Platform
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;