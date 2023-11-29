import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import RNBounceable from '@freakycoder/react-native-bounceable';

const RegisterScreen = ({navigation}) => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Sign Up</Text>
      <View style={styles.formContainer}>
        <TextInput
          mode="outlined"
          label="Email"
          // value={text}
          // onChangeText={(text) => setText(text)}
          style={styles.inputForm}
        />
        <TextInput mode="outlined" label="Password" style={styles.inputForm} />
        <TextInput
          mode="outlined"
          label="Confirm Password"
          style={styles.inputForm}
        />

        <RNBounceable onPress={() => navigation.navigate('Login')}>
          <Button mode="contained" style={styles.loginBtn}>
            <Text style={{fontSize: 16}}>Sign Up</Text>
          </Button>
        </RNBounceable>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
});
