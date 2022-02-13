import { View } from "react-native";
import { Provider } from "react-redux";
import styles from "./appStyles.js";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import store from "./redux/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Navbar />
      </View>
    </Provider>
  );
}
