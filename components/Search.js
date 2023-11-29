import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Button, Card, Searchbar} from 'react-native-paper';
import axios from 'axios';
import {ScrollView} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchPage = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const categories1 = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
    'sunglasses',
    'automotive',
    'motorcycle',
    'lighting',
  ];

  const [searchResults, setSearchResults] = useState([]);
  const results = searchResults.products;
  // console.log(searchResults);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}`,
      );
      setSearchResults(response.data);
      // console.log(searchResults.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <ScrollView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <SelectDropdown
              data={categories1}
              buttonStyle={{width: '100%'}}
              dropdownIconPosition="right"
              onSelect={(selectedItem, index) => {
                // console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
                width: '100%',
              }}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Back</Text>
              </Pressable>
              <Pressable>
                <Text style={styles.textStyle2}>Search</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable
        style={{flexDirection: 'row'}}
        onPress={() => setModalVisible(true)}>
        <Searchbar
          placeholder="Search..."
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
          style={styles.search}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <FontAwesome5
            name="shopping-cart"
            size={28}
            color="#444"
            style={{marginTop: 15}}
          />
        </TouchableOpacity>
      </Pressable>

      <View style={styles.products}>
        {results?.map(result => {
          return (
            <RNBounceable
              onPress={() => navigation.navigate('Detail', {id: result.id})}>
              <Card style={styles.cardContainer} key={result.id}>
                <Image
                  source={{
                    uri: `${result.thumbnail}`,
                  }}
                  style={styles.cardCover}
                />
                <Text style={styles.cardTitle}>{result.title}</Text>
                <Card.Content>
                  <Text variant="titleLarge" style={{color: 'black'}}>
                    {result.brand}
                  </Text>
                  <Text variant="bodyMedium" style={{color: 'black'}}>
                    Price: {result.price}
                  </Text>
                </Card.Content>
                <Card.Actions>
                  <Button
                    onPress={() =>
                      navigation.navigate('Detail', {id: result.id})
                    }
                    style={styles.cardBtn}>
                    Details
                  </Button>
                </Card.Actions>
              </Card>
            </RNBounceable>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  search: {
    width: '80%',
    backgroundColor: '#eee',
    marginLeft: 20,
    marginRight: 10,
    borderColor: 'transparent',
  },
  modalView: {
    height: '100%',
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
  },
  textStyle: {
    width: 80,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black',
    fontSize: 18,
    padding: 10,
    margin: 5,
    marginTop: 35,
    borderRadius: 5,
  },
  textStyle2: {
    width: 100,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#5c17fc',
    fontSize: 18,
    padding: 10,
    margin: 5,
    marginTop: 35,
    borderRadius: 5,
  },
  products: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: 175,
    height: 'auto',
    margin: 10,
  },
  cardCover: {
    width: '100%',
    height: 150,
    overflow: 'hidden',
  },
  cardTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
  },
  cardBtn: {
    width: '100%',
    backgroundColor: '#f2edff',
    borderColor: '#5c17fc',
  },
});
