import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {black, green, white} from '../utils/color';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';
import Gesture from '../components/Gesture';
import {
  launchCamera,
  launchImageLibrary,
  Asset,
} from 'react-native-image-picker';
import OpenCamera from '../router/OpenCamera';
import DropDown from '../components/DropDown';

const PaymentForm = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      {/* <Text style={styles.title}>Pembayaran</Text> */}
      <View style={styles.conterInput}>
        {/* <Text style={styles.name}>Email</Text>
        <TextInput
          placeholder="email"
          style={styles.input}
          // onChangeText={(em: string) => setEmail(em)}
        /> */}
        <DropDown />
      </View>

      {/* <Text>DeliveryForm</Text> */}
      <View style={styles.conterInput}>
        <Text style={styles.name}> Kualitas</Text>
        <TextInput
          placeholder="kualitas"
          style={styles.input}
          // onChangeText={(em: string) => setEmail(em)}
        />
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Harga</Text>
        <TextInput
          placeholder="harga"
          style={styles.input}
          // onChangeText={(em: string) => setEmail(em)}
        />
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Stok</Text>
        <TextInput
          placeholder="stok"
          style={styles.input}
          // onChangeText={(em: string) => setEmail(em)}
        />
      </View>
      {/* <View style={styles.conterInput}>
          <Gesture />
          <Text style={styles.name}>Pilih Paket</Text>
          <TextInput
            placeholder="pilih paket"
            style={styles.input}
            onChangeText={(em: string) => setEmail(em)}
          />
        </View> */}
      <Text style={styles.payimage}>Bukti pembayaran</Text>
      <View style={styles.divaddicon}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('opencamera')}> */}
        <OpenCamera />
        {/* <Image
                style={styles.addicon}
                source={require('../assets/icon/add-image.png')}
              /> */}
        {/* </TouchableOpacity> */}
      </View>
      <TouchableOpacity
        style={styles.divsend}
        // onPress={() => navigation.navigate('gesture')}
      >
        <Text style={styles.textdetail}>CREATE</Text>
      </TouchableOpacity>
      {/* </ScrollView> */}
    </View>
  );
};

export default PaymentForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%',
    // backgroundColor: green,
    // height: 1500,
  },
  scrollview: {
    // height: 500,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 35,
    // backgroundColor: greenyoung,
  },
  conterInput: {
    paddingHorizontal: 20,
    marginTop: 20,
    // backgroundColor: green,
  },
  name: {
    fontSize: 16,
    color: 'black',
    // backgroundColor: red,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 5,
  },
  addicon: {
    // backgroundColor: green,
    top: 3,
    height: 50,
    width: 50,
  },
  divaddicon: {
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 50,
    borderRadius: 5,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    // backgroundColor: red,
    height: 220,
    width: 345,
  },
  textdetail: {
    elevation: 3,
    width: 150,
    height: 45,
    left: 115,
    // top: 10,
    bottom: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    justifyContent: 'center',
    // display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: white,
    // top: 10,
    borderColor: black,
    backgroundColor: green,
    // height: 45,
    marginBottom: 100,
    paddingLeft: 25,
    paddingRight: 30,
    paddingTop: 10,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 2,
  },
  divsend: {
    // backgroundColor: black,
    // paddingHorizontal: 20,
    top: 10,
    bottom: 10,
    height: 55,
    width: 0,
    // right: 5,
    // paddingLeft: 10,
    marginBottom: 30,
  },
  payimage: {
    // paddingHorizontal: 20,
    left: 20,
    top: 13,
    fontSize: 16,
    color: 'black',
    // backgroundColor: red,
  },
});
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// import React from 'react';
// import {
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
// import {useNavigation, NavigationContainer} from '@react-navigation/native';
// import {RootStackParams} from '../router';
// import Gesture from '../components/Gesture';
// import DropDown from '../components/DropDown';
// import OpenCamera from '../router/OpenCamera';
// import {
//   launchCamera,
//   launchImageLibrary,
//   Asset,
//   ImagePickerResponse,
// } from 'react-native-image-picker';
// import {black, green, white} from '../utils/color';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// type PaymentFormProps = {
//   navigation: NativeStackNavigationProp<RootStackParams>;
// };

// const PaymentForm: React.FC<PaymentFormProps> = ({navigation}) => {
//   const handleOpenCamera = () => {
//     // Handle camera logic here
//     launchCamera(
//       {
//         mediaType: 'photo',
//       },
//       (response: ImagePickerResponse) => {
//         console.log(response);
//       },
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <View style={styles.conterInput}>
//           <DropDown />
//         </View>

//         <View style={styles.conterInput}>
//           <Text style={styles.name}> Kualitas</Text>
//           <TextInput placeholder="kualitas" style={styles.input} />
//         </View>

//         <View style={styles.conterInput}>
//           <Text style={styles.name}>Harga</Text>
//           <TextInput placeholder="harga" style={styles.input} />
//         </View>

//         <View style={styles.conterInput}>
//           <Text style={styles.name}>Stok</Text>
//           <TextInput placeholder="stok" style={styles.input} />
//         </View>

//         <Text style={styles.payimage}>Bukti pembayaran</Text>
//         <View style={styles.divaddicon}>
//           <TouchableOpacity onPress={handleOpenCamera}>
//             <OpenCamera />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.divsend}>
//           <Text style={styles.textdetail}>CREATE</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// export default PaymentForm;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: '5%',
//   },
//   conterInput: {
//     paddingHorizontal: 20,
//     marginTop: 20,
//   },
//   name: {
//     fontSize: 16,
//     color: 'black',
//   },
//   input: {
//     borderWidth: 1,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     borderColor: 'gray',
//     marginTop: 5,
//   },
//   divaddicon: {
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 50,
//     borderRadius: 5,
//     left: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: 20,
//     height: 220,
//     width: 345,
//   },
//   textdetail: {
//     elevation: 3,
//     width: 150,
//     height: 45,
//     left: 115,
//     bottom: 15,
//     fontStyle: 'normal',
//     fontWeight: '500',
//     fontSize: 20,
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     textTransform: 'uppercase',
//     color: white,
//     borderColor: black,
//     backgroundColor: green,
//     marginBottom: 100,
//     paddingLeft: 25,
//     paddingRight: 30,
//     paddingTop: 10,
//     marginRight: 10,
//     borderRadius: 30,
//     letterSpacing: 2,
//   },
//   divsend: {
//     top: 10,
//     bottom: 10,
//     height: 55,
//     width: 0,
//     marginBottom: 30,
//   },
//   payimage: {
//     left: 20,
//     top: 13,
//     fontSize: 16,
//     color: 'black',
//   },
// });
