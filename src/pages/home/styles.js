import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34aeeb",
    justifyContent: "center",
    padding: 20,
  },

  buttons: {
    height: 44,
    borderRadius: 5,

    backgroundColor: "#000",

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },

  bemVindo: {
    fontSize: 35,
    marginBottom: 35,

    fontWeight: "bold",
    alignSelf: "center",
    color: "#FFF",
  },

  textos: {
    color: "#FFF",
    fontSize: 18,
  },

  sobre: {
    color: "#FFF",

    fontSize: 20,
    marginBottom: 50,

    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },

  input: {
    height: 44,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 15,

    borderColor: "#34ae",

    paddingHorizontal: 10,
    marginBottom: 20,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFF",
  },
});

export default styles;
