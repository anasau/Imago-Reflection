import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, StyleSheet } from "react-native";
import { FilledButton } from "../components/FilledButton";
import * as ImagePicker from "expo-image-picker";
import Colors from "../constants/Colors";
// import Constants from 'expo-constants';
import * as Permissions from "expo-permissions";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { store } from "../store/reducers/storeReducer";

export default function CameraScreen({ route }) {
  const { name } = route.params;
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  let lowerCaseName = name.replace(/\s/g, "").toLowerCase();
  const [nextExercise, updateNextExercise] = useState(+name.slice(-1) + 1);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      // aspect: [9, 12],
      quality: 1,
    });

    setImage(image.uri);
  };

  function addInput() {
    if (image) {
      dispatch({
        type: "ADD_INPUT",
        name: lowerCaseName,
        text: image,
      });
      console.log(store.getState());

      navigation.navigate("Exercise", { name: "Exercise " + nextExercise });
    }
  }

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: "90%",
          position: "absolute",
          top: 120,
          right: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color={Colors.primary}
          onPress={() => navigation.navigate("Exercise", { name: name })}
        />
        {image && (
          <AntDesign
            name="check"
            size={24}
            color={Colors.primary}
            onPress={() => addInput()}
          />
        )}
      </View>

      <FilledButton
        title="Pick an image from camera roll"
        onPress={pickImage}
      />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 300 }} />
      )}
      <FilledButton
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
