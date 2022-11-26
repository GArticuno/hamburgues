import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import type { TypogrphyProps } from "./types";

const Typography = ({ text }: TypogrphyProps) => (<Text style={styles.textoN}>{text}</Text> );

export default Typography;