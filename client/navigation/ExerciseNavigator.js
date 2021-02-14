import React, { Provider } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ReflectionExerciseList from "../screens/ReflectionExerciseList";
import Exercise from "../screens/Exercise";
import InputScreen from "../screens/InputScreen";
import CameraScreen from "../screens/CameraScreen";

const ExerciseStack = createStackNavigator();

export default function ExerciseNavigator() {
  return (
    <ExerciseStack.Navigator
      mode={"modal"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <ExerciseStack.Screen
        name={"ReflectionExerciseList"}
        component={ReflectionExerciseList}
      />
      <ExerciseStack.Screen name={"Exercise"} component={Exercise} />
      <ExerciseStack.Screen name={"Input"} component={InputScreen} />
      <ExerciseStack.Screen name={"Camera"} component={CameraScreen} />
    </ExerciseStack.Navigator>
  );
}
