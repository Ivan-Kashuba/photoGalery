import { View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import styles from "./appStyles.js";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import store, { persistor } from "./redux/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Header />
          <Navbar />
        </View>
      </PersistGate>
    </Provider>
  );
}
