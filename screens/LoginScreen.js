import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import RNBounceable from '@freakycoder/react-native-bounceable';
import axios from 'axios';
import {Alert} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // console.log(username);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: username,
        password: password,
      });
      if (response.data) {
        Alert.alert('Login Successful');
        navigation.navigate('Home');
      } else {
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    } catch (error) {
      // console.error("Error:", error.message);
      Alert.alert('Alert', 'Please enter your username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login Page</Text>
      <Text style={{color: '#999'}}>kminchelle / 0lelplR</Text>
      <View style={styles.formContainer}>
        <TextInput
          mode="outlined"
          label="Username"
          onChangeText={username => setUsername(username)}
          style={styles.inputForm}
        />
        <TextInput
          mode="outlined"
          label="Password"
          onChangeText={password => setPassword(password)}
          // secureTextEntry
          style={styles.inputForm}
        />

        <RNBounceable onPress={handleLogin}>
          <Button mode="contained" style={styles.loginBtn}>
            <Text style={{fontSize: 16}}>Login</Text>
          </Button>
        </RNBounceable>

        <Text
          style={{
            color: '#bbb',
            marginTop: 40,
            textAlign: 'center',
          }}>
          Don't have an account?{' '}
          <RNBounceable onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                color: '#5c17fc',
                fontWeight: 'bold',
              }}>
              Sign up
            </Text>
          </RNBounceable>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#5c17fc',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
  formContainer: {
    width: '80%',
  },
  inputForm: {
    marginVertical: 10,
    backgroundColor: 'white',
  },
  loginBtn: {
    backgroundColor: '#5c17fc',
    marginTop: 30,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
