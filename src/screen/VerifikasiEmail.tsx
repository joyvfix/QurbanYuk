import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {black, green, white} from '../utils/color';

const VerifikasiEmail = () => {
  return (
    <View>
      {/* <Text>VerifikasiEmail</Text> */}
      <View style={styles.conterInput}>
        <Text style={styles.name}>Verifikasi Email</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="verifikasi"
          style={styles.input}
          //   onChangeText={(pass: string) => setPassword(pass)}
        />
        <TouchableOpacity>
          <Text style={styles.textdetail}>KIRIM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifikasiEmail;

const styles = StyleSheet.create({
  conterInput: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 16,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 5,
  },
  textdetail: {
    elevation: 3,
    width: 150,
    height: 50,
    left: 125,
    top: 50,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: white,
    // top: 10,
    borderColor: black,
    backgroundColor: green,
    // height: 45,
    paddingLeft: 25,
    paddingRight: 30,
    paddingTop: 15,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
});
