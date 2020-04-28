import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Home() {
  const litrosInputRef = useRef(null);
  const kmInputRef = useRef(null);

  const [qtdKm, setQtdKm] = useState(Number);
  const [qtdLitros, setQtdLitros] = useState(Number);

  const navigation = useNavigation();

  const navigateToResultado = () => {
    Alert.alert(
      "Aviso!",
      "A coloração da proxima tela será em função ao nível INMETRO de consumo de combustível!",
      [
        {
          text: "Ok",
          onPress: () => {
            const resultado = qtdKm / qtdLitros;

            let nivel = "";
            let cor = "";

            if (resultado > 12) {
              nivel = "A";
              cor = "#0b7b3e";
            } else if (resultado > 10 && resultado <= 12) {
              nivel = "B";
              cor = "#9ca62a";
            } else if (resultado > 8 && resultado <= 10) {
              nivel = "C";
              cor = "#e6c201";
            } else if (resultado > 4 && resultado <= 8) {
              nivel = "D";
              cor = "#eb9600";
            } else if (resultado <= 4) {
              nivel = "E";
              cor = "#d63c1d";
            }

            navigation.navigate("Resultado", {
              classificacao: nivel,
              color: cor,
            });
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#34aeeb" }}
      behavior={Platform.OS == "ios" ? "padding" : undefined}
      enabled
    >
      <ScrollView
        style={Platform.OS == "android" ? { flex: 1 } : null}
        contentContainerStyle={Platform.OS == "ios" ? { flex: 1 } : null}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.bemVindo}>BEM-VINDO</Text>
          <Text style={styles.sobre}>
            INFORME OS DADOS ABAIXO PARA SABER A EFICIÊNCIA DE COMBUSTÍVEL DO
            SEU CARRO!
          </Text>

          <View>
            <Text style={styles.textos}>
              Digite a quantidade de KM rodados pelo seu carro: (ex: 50)
            </Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              onChangeText={(value) => {
                setQtdKm(value);
              }}
              returnKeyType="next"
              onSubmitEditing={(el) => {
                litrosInputRef.current.focus();
              }}
            />
          </View>
          <View>
            <Text style={styles.textos}>
              Digite a quantidade de litros gastos pelo seu carro: (ex: 32)
            </Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              onChangeText={(value) => {
                setQtdLitros(value);
              }}
              returnKeyType="send"
              ref={litrosInputRef}
              onSubmitEditing={navigateToResultado}
            />
          </View>

          <TouchableOpacity
            onPress={navigateToResultado}
            style={styles.buttons}
          >
            <Text style={styles.textos}>CALCULAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
