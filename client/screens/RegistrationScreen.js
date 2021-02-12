import React from "react";
import { StyleSheet, View } from "react-native";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { FilledButton } from "../components/FilledButton";
import { Error } from "../components/Error";
import { IconButton } from "../components/IconButton";
import { AuthContainer } from "../components/AuthContainer";
import { AuthContext } from "../context/AuthContext";
import { Loading } from "../components/Loading";
import Colors from "../constants/Colors";
import { Design } from "@expo/vector-icons";

export function RegistrationScreen({ navigation }) {
  const { register } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState("anasau28@gmail.com");
  const [password, setPassword] = React.useState("password");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  return (
    <AuthContainer>
      <IconButton
        style={styles.closeIcon}
        name={"sign-in"}
        color={Colors.primary}
        onPress={() => {
          navigation.pop();
        }}
      />
      <View style={styles.welcome}>
        <Heading style={styles.title}>Welcome to Imago </Heading>
      </View>
      <Error error={error} />
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder={"Password"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={"Sign Up"}
        style={styles.loginButton}
        onPress={async () => {
          try {
            setLoading(true);
            await register(email, password);
            navigation.pop();
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}
      />
      <Loading loading={loading} />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
    backgroundColor: Colors.accent,
  },
  closeIcon: {
    position: "absolute",
    top: 60,
    right: 16,
  },
  welcome: {
    flexDirection: "row",
  },
});
