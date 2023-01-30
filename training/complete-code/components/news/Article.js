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


export default function Article({ item }) {
  const openLink = () => {
    const url = item.url;

    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert("Broken Link!");
      }
    });
  };



  return (
    <View style={styles.article}>
       <Image source={{ uri: item.urlToImage }} style={styles.articleImage} />

      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={openLink}>
          <Text style={styles.articleTitle} numberOfLines={3}>
            {item.title}
          </Text>
        </TouchableOpacity>

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
  articleDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  articlePublishedAt: {
    fontSize: 14,
  },
});
