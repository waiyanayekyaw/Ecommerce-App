import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';
import RNBounceable from '@freakycoder/react-native-bounceable';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.welText}>Welcome to our App</Text>
      <Text
        style={{
          color: '#bbb',
          paddingHorizontal: 40,
          textAlign: 'center',
        }}>
        The easiest way to start with your amazing application.
      </Text>

      <View style={styles.btnContainer}>
        <RNBounceable onPress={() => navigation.navigate('Login')}>
          <Button mode="contained" style={styles.loginBtn}>
            <Text style={{fontSize: 16}}>Login</Text>
          </Button>
        </RNBounceable>

        <RNBounceable onPress={() => navigation.navigate('Register')}>
          <Button mode="outlined" style={styles.signUpBtn}>
            <Text style={{fontSize: 16, color: '#5c17fc'}}>Sign Up</Text>
          </Button>
        </RNBounceable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welText: {
    color: '#5c17fc',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 40,
  },
  loginBtn: {
    backgroundColor: '#5c17fc',
    marginTop: 30,
    marginVertical: 10,
  },
  signUpBtn: {
    borderColor: '#5c17fc',
  },
});

export default WelcomeScreen;
