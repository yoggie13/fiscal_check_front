import React, { useState, useEffect } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import * as Linking from "expo-linking";
import { CameraView, Camera } from "expo-camera";
import Services from "../services/services";
import { useRef } from "react";

export default function QRCodeScannerComp() {
  const [permission, setPermission] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [scanned, setScanned] = useState(false);
  const lastScannedTimestampRef = useRef(0);

  const sendCheckLink = async (data) => {
    try {
      var res = (await Services.saveACheck({
        link: data,
      })) as Response;

      if (res.status === 200) {
        await res.json().then((response) => {
          console.log("success");
        });
      } else if (res.status === 404) {
        console.log("err");
      }
    } catch (err) {}
  };

  const handleScanning = async (data) => {
    const timestamp = Date.now();

    if (
      !data.data.includes("suf.purs.gov.rs") ||
      scanned ||
      timestamp - lastScannedTimestampRef.current < 1000
    )
      return;

    if (data.data.includes("suf.purs.gov.rs")) {
      lastScannedTimestampRef.current = timestamp;
      setScanned(true);

      setClicked(false);
      sendCheckLink(data.data);
    }
  };

  const changeClicked = () => {
    setScanned(false);
    setClicked(true);
  };

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const style = StyleSheet.create({
    a: {
      backgroundColor: "#FFFFFF",
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 64,
    },
  });

  return (
    <View style={style.a}>
      <Button onPress={changeClicked} title="Open Camera" />
      {clicked ? (
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing="back"
          onBarcodeScanned={handleScanning}
        />
      ) : null}
    </View>
  );
}
