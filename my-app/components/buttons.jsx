import React from "react";
import { View, Text } from "react-native";
import {styles} from "@/utils/styling"
/* --- Reusable Components --- */
export function Tag({ label }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

export  function Box({ title, children }) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>{title}</Text>
      <View style={styles.statsContainer}>{children}</View>
    </View>
  );
}

export  function Stat({ label, value, isHeader }) {
  return (
    <View style={styles.statRow}>
      <View style={styles.statLabel}>
        <Text style={isHeader ? styles.statLabelText : styles.statValueText}>
          {label}
        </Text>
      </View>
      <View style={styles.statValue}>
        <Text style={isHeader ? styles.statLabelText : styles.statValueText}>
          {value}
        </Text>
      </View>
    </View>
  );
}


