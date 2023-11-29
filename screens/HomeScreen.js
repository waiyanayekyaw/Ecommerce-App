import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-paper';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Search from '../components/Search';
import {ImageSlider} from 'react-native-image-slider-banner';

const HomeScreen = ({navigation}) => {
  const categoriesData = [
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

  const [activeCategory, setActiveCategory] = useState('smartphones');
  const handleClick = category => {
    setActiveCategory(category);
    // console.log(activeCategory);
  };

  const [productData, setProductData] = useState([]);
  // console.log(productData);
  const categoryFilterUrl = 'https://dummyjson.com/products/category/';

  const getCategory = async () => {
    axios({
      method: 'get',
      url: categoryFilterUrl + activeCategory,
    })
      .then(response => {
        setProductData(response.data.products);
        // console.log(productData);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  useEffect(() => {
    getCategory();
  }, [activeCategory]);

  return (
    <ScrollView>
      <View style={{backgroundColor: '#eee'}}>
        <Search productDatas={productData} />
        <View style={styles.cart}>
          <Button onPress={() => navigation.navigate('Cart')}>
            {/* <FontAwesome
              name="shopping-cart"
              style={{marginRight: 20}}
              size={28}
              color="#444"
            /> */}
          </Button>
        </View>
        <View>
          <ImageSlider
            data={[
              {
                img: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
              },
              {
                img: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
              },
              {
                img: 'https://i.dummyjson.com/data/products/16/4.jpg',
              },
            ]}
            autoPlay={true}
            closeIconColor="#fff"
          />
        </View>

        <Categories datas={categoriesData} handleClick={handleClick} />
        <Products productDatas={productData} />

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cart: {
    // backgroundColor: "purple",
    paddingVertical: 12,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
