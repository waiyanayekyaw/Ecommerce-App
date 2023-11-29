import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native';
import {
  incrementQty,
  decrementQty,
  removeFromCart,
} from '../features/cartReducer';
import {Button} from 'react-native-paper';
import RNBounceable from '@freakycoder/react-native-bounceable';

const CartScreen = ({navigation}) => {
  const products = useSelector(state => state.cart.item);
  // console.log(products);
  const [items, setItems] = useState([products]);

  const dispatch = useDispatch();

  const addQuantity = id => {
    dispatch(incrementQty(id));
    // console.log(id);
    // setItems((prevItems) =>
    //     prevItems.map((item) =>
    //         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    //     )
    // );
  };
  const minusQuantity = id => {
    dispatch(decrementQty(id));
  };
  const removeProduct = id => {
    dispatch(removeFromCart(id));
  };

  return (
    <View style={{flex: 1}}>
      {products.length === 0 && (
        <View style={styles.container}>
          <Image source={require('../assets/logo.png')} />
          <Text style={{fontSize: 16, color: '#aaa'}}>
            There is no item in the cart.
          </Text>
          <RNBounceable onPress={() => navigation.navigate('Home')}>
            <Button mode="contained" style={styles.homeBtn}>
              <Text style={{fontSize: 16}}>Go to Home</Text>
            </Button>
          </RNBounceable>
        </View>
      )}

      {products && (
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1}}>
                <View style={styles.cartContainer}>
                  <View style={styles.cartImg}>
                    <Image
                      // resizeMode="skretch"
                      style={{
                        width: '75%',
                        height: 100,
                        margin: 10,
                        marginLeft: 15,
                      }}
                      source={{
                        uri: item?.thumbnail,
                      }}
                    />
                  </View>

                  <View style={styles.cartInfo}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginTop: 10,
                      }}>
                      {item?.title}
                    </Text>
                    <Text style={{color: 'black', fontSize: 16}}>
                      $ {item?.price * item.quantity}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{color: 'black', fontSize: 16, marginTop: 10}}>
                        Quantity
                      </Text>

                      <View style={styles.buttonContainer}>
                        <Pressable
                          style={styles.btn}
                          onPress={() => minusQuantity(item.id)}>
                          <Text style={styles.text}>-</Text>
                        </Pressable>
                        <Text
                          style={{color: 'black', padding: 10, fontSize: 18}}>
                          {item.quantity}
                        </Text>
                        <Pressable
                          style={styles.btn}
                          onPress={() => addQuantity(item.id)}>
                          <Text style={styles.text}>+</Text>
                        </Pressable>
                      </View>
                    </View>

                    <View>
                      <TouchableOpacity
                        onPress={() => removeProduct(item.id)}
                        style={styles.removeBtn}>
                        <Text style={styles.removeText}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5c17fc',
    padding: 10,
    borderRadius: 5,
  },
  cartContainer: {
    width: '90%',
    height: 'auto',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,

    flexDirection: 'row',

    shadowColor: '#666',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  cartImg: {
    width: '50%',
    alignSelf: 'center',
  },
  cartInfo: {
    width: '50%',
  },
  removeBtn: {
    width: 80,
    backgroundColor: '#ff6559',
    padding: 10,
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  removeText: {
    color: '#eee',
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    backgroundColor: '#5c17fc',
    borderRadius: 50,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  homeBtn: {
    marginTop: 15,
    backgroundColor: '#5c17fc',
    borderRadius: 5,
  },
});
