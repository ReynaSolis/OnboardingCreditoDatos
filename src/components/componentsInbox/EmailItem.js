import React, { useState } from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const EmailItem = ({ item }) => {

  return (
    <View style={styles.emailContainer}>
      <Image source={{ uri: item.senderImageUrl }} style={styles.avatar} />
      <View style={styles.emailContent}>
        <Text
          style={[
            styles.title,
            item.isRead ? { color: 'green' } : styles.read,
          ]}
        >
          {item.sender}
        </Text>

        <Text
          style={[
            styles.text,
            item.isRead ? { color: 'blue' } : styles.read,
          ]}
          numberOfLines={1}
        >
          {item.subject}
        </Text>
        <Text style={styles.text} numberOfLines={1}>
          {item.description}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Text
          style={[
            styles.sentDate,
            item.isRead ? { color: 'blue' } : styles.read,
          ]}
        >
          {item.sentDate}
        </Text>
        
      </View>
    </View>
  );
};

export default EmailItem;

const styles = StyleSheet.create({
  emailContainer: {
    height: 90,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  avatar: { 
    height: 40, width: 40 
  },
  emailContent: { flex: 1, marginHorizontal: 10, justifyContent: "center" },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: 'red',
  },
  read: {
    fontWeight: 'bold',
    color: 'black',
  },

  text: {
    fontWeight: "500",
    color: 'blue',
    fontSize: 14,
  },
  actionContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "90%",
  },
  sentDate: { fontWeight: "500", fontSize: 14, color: 'blue' },
});
