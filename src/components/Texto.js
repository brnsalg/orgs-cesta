import React from "react";
import { Text, StyleSheet } from "react-native";

function Texto({ children, style }) {
  let weight = styles.texto;

  if (style?.fontWeight === "bold") weight = styles.textoNegrito;

  return <Text style={[style, weight]}>{children}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textoNegrito: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});

export default Texto;
