import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  post: {
    width: "100%",
    marginBottom: 65,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    flex: 2,
  },
  description: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default styles;
