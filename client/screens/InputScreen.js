import React, { useState } from "react";
import { Text, StyleSheet, TextInput } from "react-native";
import { TextButton } from "../components/TextButton";
import Colors from "../constants/Colors";
import { HomeScreenContainer } from "../components/HomeScreenContainer";
import { CompletedExercise } from "../components/CompletedExercise";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";


export default function InputScren({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { name, remainingTime } = route.params;
  const [nextExercise, updateNextExercise] = useState(+name.slice(-1) + 1);

  let lowerCaseName = name.replace(/\s/g, "").toLowerCase();

  let store = useSelector(state => state)

  let textinput = store.filter(exercise => exercise.name === lowerCaseName)[0].input

  const [text, setText] = React.useState(textinput);


  function addInput() {
    if (text.length > 1) {
      dispatch({
        type: "ADD_INPUT",
        name: lowerCaseName,
        text,
      });
      navigation.navigate("Exercise", { name: "Exercise " + nextExercise });

    }
  }

  const closePage = () => {
    navigation.navigate("Exercise", { name });
  };

  return (
    <HomeScreenContainer>
      <Text style={text}>
        {" "}{name}{" "}
      </Text>
      <Text> {remainingTime} </Text>
      <CompletedExercise title="Save input" onPress={() => addInput()} />
      <TextButton
        title="close page"
        style={styles.closeButton}
        onPress={closePage}
      ></TextButton>
      <TextInput
        style={styles.textInput}
        multiline
        editable
        value={
          text.slice(0, 4) === "file"
            ? alert(
              "Image is saved for this exercise. To replace it, save the new input."
            )
            : text.slice(0, 11).trim() === "Reflection"
              ? ""
              : text
        }
        onChangeText={(e) => setText(e)}
      />
    </HomeScreenContainer>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.grey,
    flex: 1,
    width: "100%",
    padding: 10,
  },
  closeButton: {
    marginVertical: 0,
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    marginVertical: 10,
    padding: 2
  }
});
