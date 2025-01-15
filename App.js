import { StatusBar } from "expo-status-bar"; // İhtiyaç durumunda
import { StyleSheet, View } from "react-native";
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import StackNavigator from "./navigation/StackNavigator";
import store from "./redux/store";
import { UserContext } from "./UserContext";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <UserContext>
          <StackNavigator />
          <ModalPortal />
        </UserContext>
      </Provider>
    </>
  );
}

// Gereksizse styles kaldırılabilir
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
