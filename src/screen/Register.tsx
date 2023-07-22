// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const Register = () => {
//   return (
//     <View>
//       <Text>Register</Text>
//     </View>
//   );
// };

// export default Register;

// const styles = StyleSheet.create({});
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {blue, green} from '../utils/color';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';

const Register = () => {
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password_confirmation, setpassword_confirmation] =
    useState<string>('');
  // const [nomor_telephone, set_Notelephone] = useState<string>('');
  // const [alamat, set_Alamat] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const reg = () => {
    if (name === '') {
      Alert.alert('ups!', 'nama wajib diisi', [
        {
          text: 'ok',
        },
      ]);
    } else if (email === '') {
      Alert.alert('ups!', 'Email wajib diisi', [
        {
          text: 'ok',
        },
      ]);
    } else if (
      email.split('@')[1] !== 'gmail.com' &&
      email.split('@')[1] !== 'email.com'
    ) {
      Alert.alert('ups!', 'email yg anda masukan salah', [
        {
          text: 'ok',
        },
      ]);
    } else if (password === '') {
      Alert.alert('ups!', 'pasword wajib diisi', [
        {
          text: 'ok',
        },
      ]);
    } else if (password.length < 6) {
      Alert.alert('ups!', 'pasword minimal 6 karakter', [
        {
          text: 'ok',
        },
      ]);
    } else if (password_confirmation !== password) {
      Alert.alert('ups!', 'pasword confirmation tidak sama', [
        {
          text: 'ok',
        },
      ]);
    } else {
      setLoading(true);
      var formdata = new FormData();
      formdata.append('name', name);
      formdata.append('email', email);
      formdata.append('password', password);
      formdata.append('password_confirmation', password_confirmation);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        // 'http://127.0.0.1:8000/api/register'
        // 'https://4352-2001-448a-4041-6d4e-ae44-c089-aa20-d7e.ngrok-free.app/api/register',
        // 'https://40ca-2001-448a-4041-465f-7805-82da-d33d-3376.ngrok-free.app/api/register',
        'https://qurbanyuk.muhammadiyahexpo.com/api/register',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          console.log(result);
          ToastAndroid.show('akun terdaftar', ToastAndroid.SHORT);
          Navigation.navigate('Login');
        })
        .catch(error => console.log('error', error))
        .finally(() => setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Name</Text>
        <TextInput
          placeholder="name"
          style={styles.input}
          onChangeText={(nm: string) => setName(nm)}
        />
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Email</Text>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={(em: string) => setEmail(em)}
        />
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          style={styles.input}
          onChangeText={(pass: string) => setPassword(pass)}
        />
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Password Confirmation</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="password confirmation"
          style={styles.input}
          onChangeText={(passConfirm: string) =>
            setpassword_confirmation(passConfirm)
          }
        />
      </View>
      {/* <View style={styles.conterInput}>
        <Text style={styles.name}>No Telephone</Text>
        <TextInput
          secureTextEntry={false}
          placeholder="nomor telephone"
          style={styles.input}
          onChangeText={(notelephone: string) => set_Notelephone(notelephone)}
        />
      </View> */}
      {/* <View style={styles.conterInput}>
        <Text style={styles.name}>Alamat</Text>
        <TextInput
          secureTextEntry={false}
          placeholder="alamat"
          style={styles.input}
          onChangeText={(alm: string) => set_Alamat(alm)}
        />
      </View> */}
      <View style={styles.buttonmid}>
        <Text style={styles.textopti}>belum punya akun?</Text>
        <TouchableOpacity onPress={() => Navigation.navigate('Login')}>
          <Text style={styles.textcreateakun}>sign in</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => reg()}>
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.textButton}>Register</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 35,
  },
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
  button: {
    width: '90%',
    height: 45,
    // backgroundColor: 'blue',
    backgroundColor: green,
    alignSelf: 'center',
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
  },
  buttonmid: {
    flexDirection: 'row',
    top: 25,
    left: 120,
  },
  textopti: {},
  textcreateakun: {
    color: green,
    fontSize: 15,
    bottom: 1,
    left: 3,
  },
});
