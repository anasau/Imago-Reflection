import React, { useState, useEffect, useContext } from "react";
import { HomeScreenContainer } from "../components/HomeScreenContainer";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { store } from "../store/reducers/storeReducer";
import { getData, postInput } from "../Server/server";
import { Feather } from "@expo/vector-icons";
import { TextButton } from "../components/TextButton";
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "../components/IconButton";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { UserContext} from '../context/UserContext'

export default function ProfileScreen() {
  const {token} = React.useContext(UserContext);

  const navigation = useNavigation();
  const [lastReflection, updateLastReflection] = useState(
    "no previous reflection found"
  );
  const [FLisVisible, updateFLisVisible] = useState(false);
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const { logout } = React.useContext(AuthContext);

  const [modalVisible, setModalVisible] = useState(false);
  const dataStore = store.getState().slice(0, 7);

  useEffect(() => {
    const input = getData("/reflection", token).then((data) => {
      updateLastReflection(data),
        dispatch({ type: "GET_DATABASE_DATA", payload: data[data.length - 1] });
    });
  }, []);

  return (
    <HomeScreenContainer
      style={styles.homeScreenContainer}
    >
      <IconButton
        style={styles.closeIcon}
        name={"sign-out"}
        color={Colors.primary}
        onPress={async () => {
          try {
            setLoading(true);
            await logout();
          } catch (e) {
            console.log(e);
            setError(e);
            setLoading(false);
          }
        }}
      />
      <Image
        source={require("../assets/future2.png")}
        style={{ height: 100, margin: 0, paddingTop: 0 }}
      />
      <TextButton
        title="View latest reflection"
        style={{
          color: Colors.primary,
          alignSelf: "flex-start",
          marginHorizontal: 8,
        }}
        textStyle={{ alignItems: "flex-start" }}
        onPress={() =>
          FLisVisible ? updateFLisVisible(false) : updateFLisVisible(true)
        }
      />
      {FLisVisible ? (
        <FlatList
          style={{ width: "100%" }}
          contentContainerStyle={styles.container}
          data={dataStore}
          renderItem={({ item, index }) => (
            <ScrollView key={item.name + 2}>
              {item.input.slice(0, 4) === "file" ? (
                <View key={index} style={{ borderRadius: 6 }}>
                  <Image
                    source={{ uri: item.input }}
                    style={{ height: 100, borderRadius: 6 }}
                  />

                  <Feather
                    name="zoom-in"
                    size={24}
                    color={Colors.lightGreen}
                    style={{ position: "absolute", top: 10, right: 5 }}
                    onPress={() => {
                      navigation.navigate("Picture", { input: item.input });
                    }}
                  />
                </View>
              ) : (
                <View
                  key={item.name}
                  style={{
                    borderRadius: 6,
                    backgroundColor: "#ddd",
                    margin: 5,
                    padding: 3,
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      marginVertical: 10,
                      color:
                        item.input.slice(0, 11).trim() === "Reflection"
                          ? "purple"
                          : Colors.primary,
                    }}
                    onPress={() =>
                      navigation.navigate("View", { input: item.input })
                    }
                  >
                    {" "}
                    {index + 1 + ": " + item.input.slice(0, 35) + "..."}{" "}
                  </Text>

                  <AntDesign
                    name="edit"
                    size={15}
                    color={Colors.brightorange}
                    style={{
                      width: "10%",
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}
                    onPress={() => {
                      navigation.navigate("Exercise", {
                        name: "Exercise " + +item.name.slice(-1),
                      }),
                        updateFLisVisible(false);
                    }}
                  />
                </View>
              )}
            </ScrollView>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <AntDesign
          name="down"
          size={24}
          color={Colors.brightPink}
          onPress={() =>
            FLisVisible ? updateFLisVisible(false) : updateFLisVisible(true)
          }
        />
      )}
      {/*         
        {(lastReflection.length> 1 && !FLisVisible) &&  Array.from(lastReflection)
        .map((each) => <Text key={Math.random()}> {each.createAt} </Text> )} */}
    </HomeScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
    marginHorizontal: 8,
  },
  closeIcon: {
    position: "absolute",
    top: 60,
    right: 16,
  },
  homeScreenContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 0,
    margin: 0,
  }
});
