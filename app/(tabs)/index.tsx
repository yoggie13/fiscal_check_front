import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import Checks from "./checks";
import QRCodeScannerComp from "@/components/QRCodeScannerComp";

export default function HomeScreen() {
  const styles = StyleSheet.create({
    app: {
      backgroundColor: "#FFFFFF",
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 64,
    },
  });
  return (
    <SafeAreaView style={styles.app}>
      <QRCodeScannerComp />
    </SafeAreaView>
  );
}
