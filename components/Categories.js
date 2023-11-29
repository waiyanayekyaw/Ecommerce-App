import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import React from 'react';

const Categories = ({datas, handleClick}) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={{color: '#5c17fc', fontSize: 20, fontWeight: 'bold'}}>
        Categories
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryListContainer}>
          {datas.map((category, index) => {
            return (
              <View style={styles.categoryLists} key={index}>
                {/* <Text style={styles.categoryList}>{category}</Text> */}
                <Button
                  key={index}
                  mode="contained-tonal"
                  onPress={() => handleClick(category, index)}>
                  {category}
                </Button>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryContainer: {
    padding: 18,
  },
  categoryListContainer: {
    flexDirection: 'row',
    flexColumn: 2,
  },
  categoryLists: {
    // backgroundColor: "#e2d6ff",
    marginTop: 20,
    marginHorizontal: 3,
  },
});
