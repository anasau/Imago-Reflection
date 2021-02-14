import React from "react";
import { Text, View } from "react-native";
import { ImageComponent } from "./ImageComponent";
import { HomeScreenContainer } from "./HomeScreenContainer";
import { Heading } from "./Heading";
import { StartExerciseButton } from "./StartExerciseButton";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Instruction } from "./Instruction";
import { TextButton } from "./TextButton";
import { styles } from './StyleSheets/DiplayedExercise'

export function DisplayedExercise(props) {
  const navigation = useNavigation();

  const { name, title, text, image } = props.exercise;

  function navigateToExercise() {
    navigation.navigate("Exercise", { name: name });
  }

  function goBackOneStep() {
    navigation.goBack();
  }
  const instruction = 'Read through the set of exercises prior to starting to journal.'

  return (
    <HomeScreenContainer style={styles.screen}>
      <Heading> Imago Reflection </Heading>
      <Instruction>
        {instruction}
      </Instruction>
      <View style={styles.carousel}>
        <AntDesign
          name="leftcircleo"
          size={24}
          color="black"
          onPress={() => props.goToPrevExerc()}
        />
        <Text style={styles.exerciseTitle}> {name} </Text>
        <AntDesign
          name="rightcircleo"
          size={24}
          color="black"
          onPress={() => props.goToNextExerc()}
        />
      </View>
      <Text style={styles.question}>
        {title}
      </Text>
      <ImageComponent
        source={image}
        style={styles.image}
      />
      <View
        style={styles.view}
      >
        <Text
          style={styles.exercise}>
          {text}
        </Text>
      </View>
      <StartExerciseButton
        title="Start reflecting"
        onPress={() => navigateToExercise()}
      />
      <TextButton
        title="go back"
        onPress={() => goBackOneStep()}
        style={styles.textbutton}
      />
    </HomeScreenContainer>
  );
}