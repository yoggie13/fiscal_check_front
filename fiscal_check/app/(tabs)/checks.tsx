import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import Check from "@/components/checkBox";

export default function Checks() {
  const styles = StyleSheet.create({
    list: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      gap: 16,
    },
  });
  return (
    <View style={styles.list}>
      <Check />
      <Check />
      <Check />
    </View>
  );
}
