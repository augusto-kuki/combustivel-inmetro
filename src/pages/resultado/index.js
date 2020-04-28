import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Resultado({ route }) {
  const { color, classificacao } = route.params;

  return (
    <View
      style={{
        backgroundColor: color,
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text style={styles.texto}>
        A classificação do seu carro aos parametros do INMETRO é:
      </Text>
      <Text style={styles.classificacao}>{classificacao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  classificacao: {
    fontSize: 60,
    marginBottom: 35,

    fontWeight: "bold",
    alignSelf: "center",
    color: "#FFF",
  },
  texto: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 50,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    alignContent: "center",
  },
});
