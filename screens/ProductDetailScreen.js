import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import FetchProduct from '../api/FetchProduct';
import axios from 'axios';
import {ImageSlider} from 'react-native-image-slider-banner';
import {addToCart} from '../features/cartReducer';
import {useDispatch} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProductDetailScreen = ({route, navigation}) => {
  const id = route.params;

  const [productDetailData, setProductDetailData] = useState([]);
  const productDetailUrl = 'https://dummyjson.com/products/';

  // console.log(id.id);

  const getProductDetail = async () => {
    axios({
      method: 'get',
      url: productDetailUrl + id.id,
    })
      .then(response => {
        setProductDetailData(response.data);
        // console.log(productDetailUrl + id.id);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  // const images = { img: productDetailData.images[1] };
  const images = productDetailData.images;

  const dispatch = useDispatch();
  const handleAddToCart = productDetailData => {
    dispatch(addToCart(productDetailData));
    // console.log(productDetailData.title);
    // console.log(addToCart({ ...productDetailData, qty: 1 }));
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  return (
    <View>
      <View style={styles.cart}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <FontAwesome5 name="shopping-cart" size={28} color="#444" />
        </TouchableOpacity>
      </View>
      <View style={styles.detailImg}>
        <ImageSlider
          data={images && images.map(img => ({img: img}))}
          autoPlay={true}
          closeIconColor="#fff"
        />
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>{productDetailData.title}</Text>
        <Text style={styles.detailBrand}>Brand: {productDetailData.brand}</Text>
        <Text style={styles.detailPrice}>
          ${productDetailData.price}{' '}
          <Text style={styles.detailDiscount}>
            {productDetailData.discountPercentage}% off
          </Text>
        </Text>
        <Text style={styles.detailDec}>{productDetailData.description}</Text>

        <View style={styles.container}>{/* <Counter /> */}</View>

        <TouchableOpacity
          onPress={() => handleAddToCart(productDetailData)}
          style={styles.cartBtn}>
          <Text style={styles.cartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <FetchProduct />
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  cart: {
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight: 20,
  },
  detailImg: {
    width: '100%',
    marginTop: 40,
    resizeMode: 'stretch',
    // backgroundColor: "red",
  },
  detailContainer: {
    padding: 15,
  },
  detailTitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  detailBrand: {
    color: 'black',
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
  },
  detailPrice: {
    color: 'black',
    fontSize: 18,
    paddingBottom: 10,
  },
  detailDiscount: {
    fontSize: 14,
    color: '#5c17fc',
  },
  detailDec: {
    color: 'black',
  },
  cartBtn: {
    marginTop: 20,
    backgroundColor: '#5c17fc',
    borderRadius: 3,
    paddingVertical: 10,
  },
  cartText: {
    color: 'white',
    textAlign: 'center',
  },
});
