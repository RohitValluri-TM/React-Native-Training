import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListDemo= () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Murthy'},
          {key: 'Kavitha'},
          {key: 'Raju'},
          {key: 'Lalitha'},
          {key: 'Janvi'},
          {key: 'Goel'},
          {key: 'John'},
          {key: 'Laxmi'},
          {key: 'Karthik'},
  
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListDemo