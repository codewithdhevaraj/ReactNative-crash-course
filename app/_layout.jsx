import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native-web";

export default function App() {
  return (
    <View style={(styles.container)}>
      <Text>Welcome! Aora</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
