import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import Texto from "../../../components/Texto";

import topo from "../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

function Topo({ titulo }) {
  return (
    <>
      <Image style={styles.topo} source={topo} />
      <Texto style={styles.titulo}>{titulo}</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});

export default Topo;
