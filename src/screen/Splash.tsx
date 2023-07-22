import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
// import Bottomlogreg from '../components/BottomLogReg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native';
import {black, white} from '../utils/color';
import {RootStackParams} from '../router';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PaketQurban from './PaketQurban';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const getToken = async () => {
    try {
      let value = await AsyncStorage.getItem('token');

      if (value !== null && value !== '') {
        navigation.navigate('homescreen');
      } else {
        navigation.navigate('Login');
      }
    } catch (f) {
      console.log('get token', f);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getToken();
    }, 2500);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column-reverse',
        backgroundColor: white,
      }}>
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 10,
          // borderRadius: 1,
          paddingLeft: 40,
          fontWeight: '600',
          fontSize: 35,
          letterSpacing: 2,
          // backgroundColor: grey,
          borderStartWidth: 20,
          borderEndWidth: 20,
          color: black,
        }}
        // onPress={() => navigation./*replace*/ navigate('Login')}
      >
        Qurban Jogja
      </Text>

      <View>
        <Image
          style={{width: 190, height: 190}}
          source={require('../assets/icon/eid-al-adha.webp')}
          // source={{
          //   uri: 'https://t3.ftcdn.net/jpg/00/55/47/68/240_F_55476867_QCp15mAPorn0w5oF4VSkUZJkCNvJhcax.jpg',
          // }}
        />
      </View>
      {/* <Fumi
            label={'Email'}
            iconClass={Icon}
            iconName={'envelope'}
            iconColor={'#f95a25'}
            iconSize={20}
            inputPadding={16}
          />
          <Fumi
            label={'password'}
            iconClass={Icon}
            iconName={'unlock-alt'}
            iconColor={'#f95a25'}
            iconSize={20}
            inputPadding={16}
          /> */}
      {/* <View
            style={{
              width: '100%',
              height: 50,
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity>
              <Icon name="home" size={30} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="search" size={30} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="plus-square" size={30} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="play" size={30} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="user" size={30} color={'black'} />
            </TouchableOpacity>
          </View> */}
    </View>
  );
};

export default Splash;

// const styles = StyleSheet.create({});
// <View>
//   <Icon name="acces-point" size={30} color={'black'} />
//   <Text>Splash</Text>
//   {/* <Bottomlogreg title="tombol" /> */}
// </View>
//   );
// };

// export default Splash;
// {:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}

// import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
// import React from 'react';

// // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import {Fumi} from 'react-native-textinput-effects';
// import {useNavigation} from '@react-navigation/native';
// import {
//   NativeStackHeaderProps,
//   NativeStackNavigationProp,
// } from '@react-navigation/native-stack';
// import {RootStackParams} from '../router';
// import {black, white} from '../utils/color';

// const Splash = () => {
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParams>>();
//   setTimeout(() => {
//     navigation.navigate('Login');
//   }, 2500);

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column-reverse',
//         backgroundColor: white,
//       }}>
//       <Text
//         style={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           bottom: 10,
//           // borderRadius: 1,
//           paddingLeft: 40,
//           fontWeight: '600',
//           fontSize: 35,
//           letterSpacing: 2,
//           // backgroundColor: grey,
//           borderStartWidth: 20,
//           borderEndWidth: 20,
//           color: black,
//         }}
//         // onPress={() => navigation./*replace*/ navigate('Login')}
//       >
//         Qurban Jogja
//       </Text>

//       <View>
//         <Image
//           style={{width: 190, height: 190}}
//           source={require('../assets/icon/eid-al-adha.webp')}
//           // source={{
//           //   uri: 'https://t3.ftcdn.net/jpg/00/55/47/68/240_F_55476867_QCp15mAPorn0w5oF4VSkUZJkCNvJhcax.jpg',
//           // }}
//         />
//       </View>
//       {/* <Fumi
//         label={'Email'}
//         iconClass={Icon}
//         iconName={'envelope'}
//         iconColor={'#f95a25'}
//         iconSize={20}
//         inputPadding={16}
//       />
//       <Fumi
//         label={'password'}
//         iconClass={Icon}
//         iconName={'unlock-alt'}
//         iconColor={'#f95a25'}
//         iconSize={20}
//         inputPadding={16}
//       /> */}
//       {/* <View
//         style={{
//           width: '100%',
//           height: 50,
//           position: 'absolute',
//           bottom: 0,
//           flexDirection: 'row',
//           justifyContent: 'space-around',
//         }}>
//         <TouchableOpacity>
//           <Icon name="home" size={30} color={'black'} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="search" size={30} color={'black'} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="plus-square" size={30} color={'black'} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="play" size={30} color={'black'} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="user" size={30} color={'black'} />
//         </TouchableOpacity>
//       </View> */}
//     </View>
//   );
// };

// export default Splash;

// const styles = StyleSheet.create({});
