import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";

export default function User({ item }) {
  
  return (
    <View style={styles.article}>
     <View style={{ flex: 1 }}>
        <TouchableOpacity >
          <Text style={styles.articleTitle}>
            {item.name} 
          </Text>
        </TouchableOpacity>

        <Text style={styles.articlePublishedAt}>{item.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  articleImage: {
    width: 150,
    height: 85,
    resizeMode: "contain",
    marginRight: 15,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

});
