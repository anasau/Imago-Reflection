import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { MainNavigator } from "../navigation/MainNavigator";
import Colors from "../constants/Colors";
import { Icon } from "@ant-design/react-native";
import ReflectionExerciseList from "../screens/ReflectionExerciseList";
import { ProfileNavigator } from "../navigation/ProfileNavigator";

const Tab = createMaterialTopTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: "grey",
        style: {
          width: "50%",
          // border:'solidblack',
          elevation: 0,
          backgroundColor: "transparent",
          height: 35,
          position: "absolute",
          left: 0,
          right: 0,
          top: 60,
        },
        labelStyle: {
          fontSize: 12,
          paddingBottom: 10,
          marginBottom: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainNavigator}
        options={{
          tabBarIcon: () => <Icon name="home" color="red" size={20} />,
        }}
      />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
