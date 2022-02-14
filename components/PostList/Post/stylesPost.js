import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  post: {
    width: "100%",
    marginBottom: 50,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  text: {
    fontSize: 18,
    flex: 2,
  },
  description: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default styles;
