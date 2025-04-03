import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

export default function Check() {
  const styles = StyleSheet.create({
    box: {
      borderColor: "gray",
      borderRadius: 4,
      borderWidth: 1,
      backgroundColor: "white",
      width: 100,
      height: 100,
    },
  });

  return (
    <View style={styles.box}>
      <Text>Test</Text>
    </View>
  );
}
