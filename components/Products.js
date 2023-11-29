import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Card} from 'react-native-paper';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useNavigation} from '@react-navigation/native';

const ProductsPage = ({productDatas}) => {
  const navigation = useNavigation();

  const API_URL = 'https://dummyjson.com/products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
        // console.log(response.data);
        // console.log(products.products[1].category);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <View style={styles.products}>
        {productDatas.map(productData => {
          return (
            <RNBounceable
              onPress={() =>
                navigation.navigate('Detail', {id: productData.id})
              }>
              <Card style={styles.cardContainer} key={productData.id}>
                <Image
                  // resizeMode="skretch"
                  source={{
                    uri: `${productData.thumbnail}`,
                  }}
                  style={styles.cardCover}
                />
                <Text style={styles.cardTitle}>{productData.title}</Text>
                <Card.Content>
                  <Text variant="titleLarge" style={{color: 'black'}}>
                    {productData.brand}
                  </Text>
                  <Text variant="bodyMedium" style={{color: 'black'}}>
                    Price: {productData.price}
                  </Text>
                </Card.Content>
                <Card.Actions>
                  <Button
                    onPress={() =>
                      navigation.navigate('Detail', {id: productData.id})
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
    </View>
  );
};

export default ProductsPage;

const styles = StyleSheet.create({
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
