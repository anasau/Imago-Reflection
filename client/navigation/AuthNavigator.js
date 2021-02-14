import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "../screens/AuthScreen";
import { RegistrationScreen } from "../screens/RegistrationScreen";

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

export function AuthNavigator() {
  return (
    <AuthStack.Navigator
      mode={"modal"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={"LoginStack"}>
        {() => (
          <LoginStack.Navigator
            mode={"card"}
            screenOptions={{
              headerShown: false,
            }}
          >
            <LoginStack.Screen name={"Login"} component={AuthScreen} />
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>
      <AuthStack.Screen name={"Registration"} component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}
