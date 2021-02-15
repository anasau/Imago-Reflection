import React, { useState, useEffect, useContext } from "react";
import { HomeScreenContainer } from "../components/HomeScreenContainer";
import { store } from "../store/reducers/storeReducer";
import { getData, postInput } from "../Server/server";
import { Feather } from "@expo/vector-icons";
import { TextButton } from "../components/TextButton";
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "../components/IconButton";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from '../context/UserContext'
import { styles } from './StyleSheets/ProfileScreenStyleSheet'
import {
  Text,
  ScrollView,
  View,
  FlatList,
  Image,
} from "react-native";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [FlatListisVisible, updateFLisVisible] = useState(false);
  const { token } = React.useContext(UserContext);
  const { logout } = React.useContext(AuthContext);
  const dataStore = useSelector(state => state).slice(0, 7);

  useEffect(() => {
    getData("/reflection", token).then((data) => {
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
            await logout();
          } catch (e) {
            console.log(e);
          }
        }}
      />
      <Image
        source={require("../assets/future2.png")}
        style={styles.cover}
      />
      <TextButton
        title="View latest reflection"
        style={styles.textButton}
        textStyle={{ alignItems: "flex-start" }}
        onPress={() =>
          FlatListisVisible ?
            updateFLisVisible(false)
            :
            updateFLisVisible(true)
        }
      />
      {FlatListisVisible ? (
        <FlatList
          style={{ width: "100%" }}
          contentContainerStyle={styles.container}
          data={dataStore}
          renderItem={({ item, index }) => (
            <ScrollView >
              {item.input.slice(0, 4) === "file" ? (
                <View style={{ borderRadius: 6 }}>
                  <Image
                    source={{ uri: item.input }}
                    style={styles.image}
                  />

                  <Feather
                    name="zoom-in"
                    size={24}
                    color={Colors.lightGreen}
                    style={styles.zoomInIcon}
                    onPress={() => {
                      navigation.navigate("Picture", { input: item.input });
                    }}
                  />
                </View>
              ) : (
                  <View
                    style={styles.exerciseList}
                  >
                    <Text
                      style={styles.exerciseDisplay}
                      color={
                        item.input.slice(0, 11).trim() === "Reflection"
                          ? "purple"
                          : Colors.primary}
                      onPress={() =>
                        navigation.navigate("View", { input: item.input })
                      }
                    >
                      {index + 1 + ": " + item.input.slice(0, 35) + "..."}
                    </Text>

                    <AntDesign
                      name="edit"
                      size={15}
                      color={Colors.brightorange}
                      style={styles.editIcon}
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
              FlatListisVisible ? updateFLisVisible(false) : updateFLisVisible(true)
            }
          />
        )}
    </HomeScreenContainer>
  );
}
