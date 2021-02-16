import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FilledButton } from "../components/FilledButton";
import { HomeScreenContainer } from "../components/HomeScreenContainer";
import { Instruction } from "../components/Instruction";
import Colors from "../constants/Colors";
import { CompletedExercise } from "../components/CompletedExercise";
import { useNavigation } from "@react-navigation/native";
import { CountDown } from "../components/countdown";
import { store } from "../store/reducers/storeReducer";
import { postInput, updateInput } from "../Server/server";
import { TextButton } from "../components/TextButton";
import { UserContext } from '../context/UserContext'
import { useSelector } from 'react-redux';

export default function Exercise({ route }) {
  const { token, email, _id } = React.useContext(UserContext);
  const [name, updateName] = useState(route.params.name);
  const [id, updateId] = useState(
    store.getState().filter((object) => object.name === "_id")[0].input
  );
  const [message, updateMessage] = useState("");
  const dataStore = useSelector(state => state)

  const completeReflection = () => {
    const data = {
      exercise1: dataStore[0].input,
      exercise2: dataStore[1].input,
      exercise3: dataStore[2].input,
      exercise4: dataStore[3].input,
      exercise5: dataStore[4].input,
      exercise6: dataStore[5].input,
      exercise7: dataStore[6].input,
      user: { email, _id }
    };
    updateMessage("");
    console.log('data to be saved', data)

    const result = async () => {
      await postInput("/reflection", data, token).then(data => console.log(data, 'async console'))
        // updateMessage('reflection has been successfully added'))

    }
    result();

  }
  const updateReflection = () => {
    const data = {
      _id: dataStore[7].input,
      exercise1: dataStore[0].input,
      exercise2: dataStore[1].input,
      exercise3: dataStore[2].input,
      exercise4: dataStore[3].input,
      exercise5: dataStore[4].input,
      exercise6: dataStore[5].input,
      exercise7: dataStore[6].input,
      user: { email, _id }
    };
    updateMessage("");
    const edit = updateInput("/reflection", data, token).then((data) =>
      updateMessage("Reflection has been successfully submitted.")
    );
    return edit;
  };

  const [remainingTime, updateRemainingTime] = useState(90);
  const [counterOn, updateCounterOn] = useState(false);

  function count() {
    updateCounterOn(true);
    setInterval(
      () => updateRemainingTime((remaining) => remaining - 1),
      1000 * 60
    );
  }

  function pauseCount() {
    clearInterval(count);
    updateCounterOn(false);
  }


  const navigation = useNavigation();

  function goBackOneStep() {
    updateMessage("");
    navigation.navigate("ReflectionExerciseList", { lastexercise: name });
  }

  function openCamera() {
    updateMessage("");
    navigation.navigate("Camera", { name: name });
  }

  function addInput() {
    updateMessage("");
    navigation.navigate("Input", { name: name, remainingTime: remainingTime });
  }

  function nextExerciseFunc() {
    updateMessage("");
    if (name.slice(-1) < 7) {
      updateName((name) => name.slice(0, -1) + Number(+name.slice(-1) + 1));
    }
  }

  function goBackOneStep() {
    navigation.navigate("ReflectionExerciseList", { name: name.slice(-1) });
  }

  const instruction =
    "Before starting this exercise, set a timer. Check tips throughout the exercise or get in touch with the couch for guidance. Enjoy! ";

  return (
    <HomeScreenContainer>
      <CompletedExercise
        title="Complete Reflection"
        onPress={() => {
          id.length > 5 ? updateReflection() : completeReflection();
        }}
      />
      <Text style={styles.textMessage}> {message} </Text>
      <Instruction>
        {instruction}
      </Instruction>
      <Image
        source={require("../assets/reflection.png")}
        style={styles.image}
      />
      <View style={styles.view}>
        <FilledButton
          title="< exercise list"
          style={styles.navButton}
          textStyle={styles.textStyle}
          onPress={() => goBackOneStep()}
        />
        <CountDown
          remainingTime={remainingTime}
          count={count}
          pauseCount={pauseCount}
          counterOn={counterOn}
        />
        <FilledButton
          title="next exercise > "
          style={styles.navButton}
          textStyle={styles.textStyle}
          onPress={() => nextExerciseFunc()}
        />
      </View>
      <Text style={styles.title}>
        {name}
      </Text>
      <FilledButton
        title="Add Insight"
        style={styles.inputButton}
        onPress={() => addInput()}
      />
      <FilledButton
        title="Add Picture"
        style={styles.inputButton}
        onPress={() => openCamera()}
      />
      <TextButton
        title="go back"
        onPress={() => goBackOneStep()}
        style={{ fontSize: 12, color: "black" }}
      />
    </HomeScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    width: "90%",
    textAlign: "center",
    paddingVertical: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  navButton: {
    marginBottom: 20,
    padding: 0,
    width: "30%",
  },

  textStyle: { fontSize: 12, color: Colors.primary },
  inputButton: {
    color: "black",
    backgroundColor: Colors.accent,
    width: "80%",
    height: 20,
    marginVertical: 5,
    borderRadius: 0,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textMessage: {
    color: "blue",
    marginVertical: 10
  },
  image: {
    width: 150,
    height: 150
  }
});
