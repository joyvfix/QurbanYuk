// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const login = () => {
//   return (
//     <View style={Styles.container}>
//       <Text>login</Text>
//     </View>
//   );
// };

// export default login;

// const Styles = StyleSheet.create({
//   container: {
//     padding: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// import {
//     Text,
//     StyleSheet,
//     View,
//     Image,
//     TextInput,
//     TouchableOpacity,
//   } from 'react-native';
//   import React, {Component} from 'react';

//   import Componentinput from './Componentinput';
//   import {NativeStackScreenProps} from '@react-navigation/native-stack';
//   import {RootStackParams} from '../router';
//   import {black, white} from '../utils/color';
//   import HomeScreen from './HomeScreen';

//   // type Props = {
//   //   navigation: any;
//   // };
//   type loginscreennavigationprop = NativeStackScreenProps<
//     RootStackParams,
//     'Login'
//   >;
//   export default class Login extends Component<loginscreennavigationprop> {
//     render() {
//       const {navigation} = this.props;
//       return (
//         <View style={styles.maincontainer}>
//           <View style={styles.logocontainer}>
//             <Image
//               style={styles.logo}
//               source={require('../assets/icon/eid-al-adha.webp')}
//             />
//             <Text style={styles.judul}>login</Text>
//             <Text style={styles.Judul}>silahkan login agar bisa bergabung</Text>
//             <Componentinput />

//             {/* <Bottomlogreg title="sign in" /> */}
//             <View style={styles.kotak}>
//               <TouchableOpacity onPress={() => navigation.navigate('homescreen')}>
//                 <Text style={styles.sign}>sign in</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.option}>
//               <Text style={styles.bawah}>
//                 dont have account?
//                 <TouchableOpacity onPress={() => navigation.navigate('register')}>
//                   <Text style={styles.text}>create account</Text>
//                 </TouchableOpacity>
//               </Text>
//             </View>
//           </View>
//         </View>
//       );
//     }
//   }

//   const styles = StyleSheet.create({
//     maincontainer: {
//       flex: 1,
//       backgroundColor: 'white',
//     },
//     logo: {
//       width: 70,
//       height: 70,
//       marginTop: 30,
//     },
//     logocontainer: {
//       //backgroundColor:silver,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 50,
//     },
//     judul: {
//       fontSize: 50,
//       fontWeight: 'bold',
//       color: 'black',
//     },
//     Judul: {
//       //color:
//       marginTop: 15,
//     },

//     text: {
//       color: 'blue',
//       fontSize: 15,
//       top: 4,
//       left: 3,
//     },
//     bawah: {
//       color: black,
//       fontSize: 15,
//       display: 'flex',
//       marginTop: 20,
//     },

//     kotak: {
//       //paddingTop: 5,
//       // marginTop: 150,
//       // backgroundColor: 'blue',
//       // paddingStart: 70,
//       // borderRadius: 15,
//       // fontWeight: 'bold',
//       paddingTop: '30%',
//     },
//     sign: {
//       // paddingHorizontal: '35%',
//       // borderRadius: 15,
//       // marginTop: 10,
//       // marginBottom: 10,

//       // paddingLeft: 50,
//       // color: white,
//       // fontSize: 30,
//       // fontWeight: '900',
//       // alignItems: 'center',
//       // justifyContent: 'center',
//       color: white,
//       backgroundColor: 'blue',
//       paddingHorizontal: '30%',
//       paddingVertical: 15,
//       borderRadius: 15,
//       fontSize: 20,
//     },
//     option: {
//       flexDirection: 'row',
//       bottom: 10,
//     },
//   });
// // {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}

// // import {
// //   Text,
// //   StyleSheet,
// //   View,
// //   Image,
// //   TextInput,
// //   TouchableOpacity,
// // } from 'react-native';
// // import React, {Component} from 'react';
// // import {black, white} from '../utils';
// // import Bottomlogreg from '../components/BottomLogReg';
// // import Componentinput from './Componentinput';

// // type Props = {
// //   navigation: any;
// // };
// // export default class Login extends Component<Props> {
// //   render() {
// //     return (
// //       <View style={styles.maincontainer}>
// //         <View style={styles.logocontainer}>
// //           <Image
// //             style={styles.logo}
// //             source={require('../assets/icon/applelogo.png')}
// //           />
// //           <Text style={styles.judul}>login</Text>
// //           <Text style={styles.Judul}>silahkan login agar bisa bergabung</Text>
// //           <Componentinput />

// //           {/* <Bottomlogreg title="sign in" /> */}
// //           <View style={styles.kotak}>
// //             <TouchableOpacity>
// //               <Text
// //                 onPress={() => this.props.navigation.navigate('Profile')}
// //                 style={styles.sign}>
// //                 sign in
// //               </Text>
// //             </TouchableOpacity>
// //           </View>
// //           <TouchableOpacity>
// //             <Text style={styles.bawah}>
// //               dont have account? <Text style={styles.text}>create account</Text>
// //             </Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   maincontainer: {
// //     flex: 1,
// //     backgroundColor: 'white',
// //   },
// //   logo: {
// //     width: 70,
// //     height: 70,
// //     marginTop: 30,
// //   },
// //   logocontainer: {
// //     //backgroundColor:silver,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginTop: 50,
// //   },
// //   judul: {
// //     fontSize: 50,
// //     fontWeight: 'bold',
// //     color: 'black',
// //   },
// //   Judul: {
// //     //color:
// //     marginTop: 15,
// //   },

// //   text: {
// //     color: 'blue',
// //     fontSize: 15,
// //   },
// //   bawah: {
// //     color: black,
// //     fontSize: 15,
// //     display: 'flex',
// //     marginTop: 20,
// //   },

// //   kotak: {
// //     //paddingTop: 5,
// //     // marginTop: 150,
// //     // backgroundColor: 'blue',
// //     // paddingStart: 70,
// //     // borderRadius: 15,
// //     // fontWeight: 'bold',
// //     paddingTop: '30%',
// //   },
// //   sign: {
// //     // paddingHorizontal: '35%',
// //     // borderRadius: 15,
// //     // marginTop: 10,
// //     // marginBottom: 10,

// //     // paddingLeft: 50,
// //     // color: white,
// //     // fontSize: 30,
// //     // fontWeight: '900',
// //     // alignItems: 'center',
// //     // justifyContent: 'center',
// //     color: white,
// //     backgroundColor: 'blue',
// //     paddingHorizontal: '30%',
// //     paddingVertical: 15,
// //     borderRadius: 15,
// //     fontSize: 20,
// //   },
// // });
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import register from './Register';
import {blue, green} from '../utils/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './HomeScreen';
import {RootStackParams} from '../router';
import AdminPage from './AdminPage';

const Register = () => {
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const reg = () => {
    if (email === '') {
      Alert.alert('ups!', 'email wajib diisi', [
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
    } else {
      setLoading(true);

      var formdata = new FormData();
      formdata.append('email', email);
      formdata.append('password', password);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        // 'https://5b7a-2001-448a-4041-8062-89f5-3a48-f3e-f056.ngrok-free.app/api/login',
        // 'https:frontendreq.pondokprogrammer.com/api/login',
        // 'https://4352-2001-448a-4041-6d4e-ae44-c089-aa20-d7e.ngrok-free.app/api/login',
        // 'https://40ca-2001-448a-4041-465f-7805-82da-d33d-3376.ngrok-free.app/api/login',
        'https://qurbanyuk.muhammadiyahexpo.com/api/login',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.message == 'Email or password is incorrect') {
            Alert.alert('Perhatian !', 'akun anda belum terdaftar');
          } else {
            if (result.role == 'admin') {
              Navigation.navigate('tabview');
              AsyncStorage.setItem('token', result.token);
            } else if (result.role == 'user') {
              console.log('token', result.token);
              AsyncStorage.setItem('token', result.token);
              Navigation.replace('homescreen');
            }
          }

          //   return null; // or return your component JSX
          // };

          //   if (result.error_message) {
          //     Alert.alert(
          //       'perhatian',
          //       'akun yang anda masukan salah /belum terdaftar',
          //       [
          //         {
          //           text: 'ok',
          //         },
          //       ],
          //     );
          //   } else {

          //   }
        })
        .catch(error => {
          console.log('error', error);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login </Text>
      {/* <View style={styles.conterInput}>
          <Text style={styles.name}>Name</Text>
          <TextInput
            placeholder="name"
            style={styles.input}
            onChangeText={(nm: string) => setName(nm)}
          />
        </View> */}
      <View style={styles.conterInput}>
        <Text style={styles.name}>Email</Text>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={em => setEmail(em)}
        />
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          style={styles.input}
          onChangeText={pass => setPassword(pass)}
        />
      </View>
      {/* <View style={styles.conterInput}>
          <Text style={styles.name}>Password Confirmation</Text>
          <TextInput
            placeholder="password confirmation"
            style={styles.input}
            onChangeText={(passConfirm: string) =>
              setPassword_Confirmation(passConfirm)
            }
          />
        </View> */}
      <View style={styles.buttonmid}>
        <Text style={styles.textopti}>belum punya akun?</Text>
        <TouchableOpacity onPress={() => Navigation.navigate('register')}>
          <Text style={styles.textcreateakun}>buat akun</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.navigate('forgotpassword')}>
          <Text style={styles.textforgotpassword}>forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => reg()}>
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.textButton}>Login</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate('tabs')}>
        <Text style={styles.textadmin}>enter as admin</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => Navigation.navigate('tabs')}>
        <Text style={styles.textadmin}>enter to tabs</Text>
      </TouchableOpacity> */}
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
    // elevation: 5,
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
    justifyContent: 'space-around',
    flexDirection: 'row',
    top: 25,
    // left: 120,
  },
  textopti: {
    fontSize: 15,
    bottom: 1,
    left: '-10%',
  },
  textcreateakun: {
    color: green,
    fontSize: 15,
    bottom: 1,
    // left: '1.5%',
    right: '55%',
  },
  textforgotpassword: {
    color: green,
    fontSize: 15,
    bottom: 1,
    // left: '1.5%',
    // right: '63%',
  },
  textadmin: {
    top: '130%',
    textAlign: 'center',
    color: green,
    fontSize: 15,
    bottom: 1,
  },
});
