import React, { Provider } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ExerciseNavigator from "./ExerciseNavigator";
import CameraScreen from "../screens/CameraScreen";

const MainStack = createStackNavigator();

export function MainNavigator(props) {
  return (
    <MainStack.Navigator
      mode={"modal"}
      screenOptions={{
        headerShown: false,
      }}

    >
      <MainStack.Screen name={"Home"} component={HomeScreen} />

      <MainStack.Screen
        name={"ExerciseNavigator"}
        component={ExerciseNavigator}
      />
      <MainStack.Screen
        name={"Camera"}
        component={CameraScreen}
        initialParams={{ nextEx: 1 }}
      />
    </MainStack.Navigator>
  );
}
