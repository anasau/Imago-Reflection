import React, { useState, useEffect, useContext } from "react";
import { HomeScreenContainer } from "../components/HomeScreenContainer";
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
import { styles } from './StyleSheets/ProfileScreen.style'
import { Exercises } from '../store/exercises'

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
  const dataStore = useSelector(state => state).slice(0, 7);
  const [FlatListisVisible, updateFLisVisible] = useState(false);
  const { logout } = React.useContext(AuthContext);
  const { token, _id } = React.useContext(UserContext);

  useEffect(() => {
    const data = async () => {
      const user = { _id }

      try {
        await getData("/reflection", token, user).then((data) => {
          data.length > 0 && dispatch({ type: "GET_DATABASE_DATA", payload: data[data.length - 1] });
        });
      } catch (e) {
        console.log(e)
      }
    }
    data()
  }, []);

  return (
    <View style={{ backgroundColor: 'white' }}>
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
      <Text style={styles.heading} />
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
                  style={styles.exerciseList}
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
                  <Text style={styles.cardTitle}>
                    {item.name}
                  </Text>
                  <View style={styles.cardBody}>
                    <Text
                      style={styles.exerciseDisplay}
                      onPress={() =>
                        navigation.navigate("View", { input: item.input })
                      }
                    >
                      {item.input.slice(0, 120)}
                    </Text>
                    <AntDesign
                      name="edit"
                      size={15}
                      color='white'
                      style={styles.editIcon}
                      onPress={() => {
                        navigation.navigate("Exercise", {
                          name: "Exercise " + +item.name.slice(-1),
                        }),
                          updateFLisVisible(false);
                      }}
                    />
                  </View>

                </View>
              )}
          </ScrollView>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>
  );
}
