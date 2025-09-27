import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Tag,Box,Stat} from "@/components/buttons";
import {styles} from "@/utils/styling";
export default function App() {
  return (
    <View style={styles.innerContainer}>
      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <Text style={styles.headerIcon}>⚡</Text>
          <Text style={styles.headerText}>Revyu</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.headerIcon}>👤</Text>
          <Text style={styles.headerText}>User</Text>
        </View>
      </View>

      {/* Restaurant Header */}
      <View style={styles.restaurantHeader}>
        <Text style={styles.restaurantIcon}>🍔</Text>
        <Text style={styles.safetext}>Burger Lab</Text>
      </View>

      {/* Content inside SafeArea */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            <View style={styles.lightBlueBox}>
              <View style={styles.contentPadding}>
                <Text style={styles.alertTitle}>Low rating alert</Text>
                <Text style={styles.orderNumber}>Order-#1234</Text>
              </View>

              <View style={styles.contentPadding}>
                <Text style={styles.itemName}>Old school Burger</Text>
                <Text style={styles.commentText}>The burger was cold</Text>
                <View style={styles.tagContainer}>
                  <Tag label="Cold" />
                  <Tag label="Poor Quality" />
                </View>

                <Text style={styles.itemName}>Waiter</Text>
                <Text style={styles.commentText}>The waiter was rude</Text>
                <View style={styles.tagContainer}>
                  <Tag label="Rude" />
                  <Tag label="Service" />
                </View>

                <Text style={styles.itemName}>Environment</Text>
                <Text style={styles.commentText}>
                  There was cockroach on my table
                </Text>
                <View style={styles.tagContainer}>
                  <Tag label="Hygiene" />
                  <Tag label="Environment" />
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonWrapper} onPress={() => alert("Resolved")}>
                  <Text style={styles.buttonText}>Resolve</Text>
                </Pressable>
                <Pressable style={styles.buttonWrapper} onPress={() => alert("Acknowledged")}>
                  <Text style={styles.buttonText}>Acknowledge</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            <Box title="Quick stats today">
              <Stat label="Total Rev." value="36" />
              <Stat label="Alert Trig." value="4" />
              <Stat label="Avg. Rating" value="4.2" />
              <Stat label="Fastest Res." value="3min" />
            </Box>

            <Box title="Best Choice today">
              <Text style={styles.subTitle}>Grill deal - 4.7⭐</Text>
              <Stat label="Item" value="Rating" isHeader />
              <Stat label="Chicken Bur." value="4.5" />
              <Stat label="Smoothie" value="4.2" />
              <Stat label="French Fries" value="4.0" />
            </Box>

            <Box title="Best comment Of the Day">
              <Text style={styles.commentHighlight}>"The Food was amazing"</Text>
            </Box>

            <Box title="Waiter Performance">
              <Stat label="Alice" value="4.5" />
              <Stat label="James" value="4.2" />
              <Stat label="Frank" value="4.0" />
            </Box>
          </View>
        </View>

        {/* Bottom Bar */}
        <View style={styles.greenBox}>
          <Text style={styles.tableTitle}>Alert History</Text>
          <View style={styles.tableContainer}>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              {["Date", "Order", "Item", "Comment", "Status", "Action"].map(
                (h, i) => (
                  <Text key={i} style={styles.tableHeaderText}>
                    {h}
                  </Text>
                )
              )}
            </View>

            {/* Table Rows */}
            {[
              {
                date: "2024-06-01",
                order: "#1234",
                item: "Burger",
                comment: "Cold food",
                status: "Pending",
                action: "Resolve",
              },
              {
                date: "2024-06-01",
                order: "#1235",
                item: "Fries",
                comment: "Too salty",
                status: "Acknowledged",
                action: "View",
              },
              {
                date: "2024-06-01",
                order: "#1236",
                item: "Smoothie",
                comment: "Great taste",
                status: "Closed",
                action: "View",
              },
            ].map((row, idx) => (
              <View
                key={idx}
                style={[
                  styles.tableRow,
                  { backgroundColor: idx % 2 === 0 ? "#f8f9fa" : "#fff" },
                ]}
              >
                <Text style={styles.tableCellText}>{row.date}</Text>
                <Text style={styles.tableCellText}>{row.order}</Text>
                <Text style={styles.tableCellText}>{row.item}</Text>
                <Text style={styles.tableCellText}>{row.comment}</Text>
                <Text style={styles.tableCellText}>{row.status}</Text>
                <Pressable onPress={() => alert(`${row.action} clicked`)}>
                  <Text style={styles.tableActionText}>{row.action}</Text>
                </Pressable>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

