import React from "react";
import { View, StyleSheet } from "react-native";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { FilledButton } from "../components/FilledButton";
import { TextButton } from "../components/TextButton";
import { Error } from "../components/Error";
import { AuthContainer } from "../components/AuthContainer";
import { AuthContext } from "../context/AuthContext";
import { Loading } from "../components/Loading";
import Colors from "../constants/Colors";
import {username, pass} from'@env'

export function AuthScreen({ navigation }) {
  const { login } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState(username);
  const [password, setPassword] = React.useState(pass);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  return (
    <AuthContainer>
      <View style={styles.welcome}>
        <Heading style={styles.title}> Welcome to Imago </Heading>
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
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={"Login"}
        style={styles.loginButton}
        onPress={async () => {
          try {
            setLoading(true);
            await login(email, password);
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}
      />
      <TextButton
        title={"Haven't got an? Create one"}
        style={styles.textButton}
        onPress={() => {
          navigation.navigate("Registration");
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
  welcome: {
    flexDirection: "row",
  },
  textButton: {
    color: "black",
  },
});
