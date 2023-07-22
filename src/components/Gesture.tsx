import {
  Text,
  StyleSheet,
  View,
  DrawerLayoutAndroid,
  Touchable,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {black, green, red, white} from '../utils/color';
import DropDown from './DropDown';

export default class drawer extends Component {
  private drawerRef = React.createRef<DrawerLayoutAndroid>();
  render() {
    const navigationView = (
      <View>
        <View
          style={{
            backgroundColor: green,
            alignItems: 'baseline',
            flexDirection: 'column',
            paddingTop: 20,
            paddingLeft: 20,

            paddingVertical: 30,
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
            }}
            style={styles.firstlogo}
          />

          <Text style={styles.text1}>GILDED</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/5582/5582932.png',
            }}
            style={styles.truelogo}
          />
          <Text style={styles.text2}>5.203 followers</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/747/747410.png',
            }}
            style={styles.followerslogo}
          />
        </View>
        {/* baris baru  baris baru baris baru */}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 50,
              paddingRight: 90,
              marginRight: 70,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/2354/2354573.png',
              }}
              style={styles.profilelogo}
            />
            <Text style={styles.profile}>profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingRight: 90,
              marginRight: 70,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/542/542638.png',
              }}
              style={styles.messageslogo}
            />
            <Text style={styles.messages}>messages</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
              paddingRight: 90,
              marginRight: 70,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/9364/9364298.png',
              }}
              style={styles.activitylogo}
            />
            <Text style={styles.activity}>activity</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
              paddingRight: 90,
              marginRight: 70,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1187/1187525.png',
              }}
              style={styles.listlogo}
            />
            <Text style={styles.list}>list</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 15,
            paddingRight: 90,
            marginRight: 70,
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/5436/5436546.png',
            }}
            style={styles.repostlogo}
          />
          <Text style={styles.repost}>repost</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 15,
            paddingRight: 90,
            marginRight: 70,
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/921/921540.png',
            }}
            style={styles.statisticlogo}
          />
          <Text style={styles.statistic}>statistic</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 15,
            paddingRight: 90,
            marginRight: 70,
            borderBottomWidth: 0.2,
            paddingBottom: 50,
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828479.png',
            }}
            style={styles.signoutlogo}
          />
          <Text style={styles.signout}>sign out</Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
              paddingRight: 90,
              marginRight: 70,

              paddingBottom: 30,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1358/1358023.png',
              }}
              style={styles.sharelogo}
            />
            <Text style={styles.share}>tell a friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
              paddingRight: 90,
              marginRight: 70,

              paddingBottom: 30,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828940.png',
              }}
              style={styles.helplogo}
            />
            <Text style={styles.help}>help and fedback</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        style={styles.stylesdrawer}
        ref={this.drawerRef}
        drawerWidth={300}
        drawerPosition={'left'}
        renderNavigationView={() => navigationView}>
        <TouchableOpacity onPress={() => this.drawerRef.current?.openDrawer()}>
          <Image
            source={{
              uri: 'https:cdn-icons-png.flaticon.com/128/1828/1828859.png',
            }}
            style={{width: 30, height: 30, margin: 10, backgroundColor: red}}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{fontSize: 50, marginVertical: 10}}
            onPress={() => this.drawerRef.current?.openDrawer()}>
            {/* open drawer
            <Image
              style={styles.firstbackground}
              source={require('../assets/icon/menu.png')}
            /> */}
          </Text>
          {/* <Text></Text> */}
          <View></View>
        </View>
        {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
        <View style={styles.container}>
          {/* <Gesture /> */}
          {/* <ScrollView
            style={styles.scrollview}
            showsVerticalScrollIndicator={false}> */}
          <Text style={styles.title}>Pemesanan</Text>
          <View style={styles.conterInput}>
            <Text style={styles.name}>Email</Text>
            <TextInput
              placeholder="email"
              style={styles.input}
              // onChangeText={(em: string) => setEmail(em)}
            />
          </View>

          {/* <Text>DeliveryForm</Text> */}
          <View style={styles.conterInput}>
            <Text style={styles.name}> Alamat</Text>
            <TextInput
              placeholder="masukan alamat"
              style={styles.input}
              // onChangeText={(em: string) => setEmail(em)}
            />
          </View>
          <View style={styles.conterInput}>
            <Text style={styles.name}>No Hp</Text>
            <TextInput
              placeholder="masukan no hp"
              style={styles.input}
              // onChangeText={(em: string) => setEmail(em)}
            />
          </View>
          <View style={styles.conterInput}>
            <Text style={styles.name}>Jenis Hewan</Text>
            <TextInput
              placeholder="jenis hewan"
              style={styles.input}
              // onChangeText={(em: string) => setEmail(em)}
            />
          </View>
          <View style={styles.conterInput}>
            <Text style={styles.name}>Pilih Paket</Text>
            {/* <TextInput
            placeholder="pilih paket"
            style={styles.input}
            // onChangeText={(em: string) => setEmail(em)}
          /> */}
            <DropDown />
          </View>
          {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
          {/* <Text style={styles.title}>Pembayaran</Text>
        <View style={styles.conterInput}>
          <Text style={styles.name}>Email</Text>
          <TextInput
            placeholder="email"
            style={styles.input}
            // onChangeText={(em: string) => setEmail(em)}
          />
        </View> */}

          {/* <Text>DeliveryForm</Text> */}
          {/* <View style={styles.conterInput}>
          <Text style={styles.name}> Alamat</Text>
          <TextInput
            placeholder="masukan alamat"
            style={styles.input}
            // onChangeText={(em: string) => setEmail(em)}
          />
        </View> */}
          {/* <View style={styles.conterInput}>
          <Text style={styles.name}>No Hp</Text>
          <TextInput
            placeholder="masukan no hp"
            style={styles.input}
            // onChangeText={(em: string) => setEmail(em)}
          />
        </View> */}
          {/* <View style={styles.conterInput}>
          <Text style={styles.name}>Jenis Hewan</Text>
          <TextInput
            placeholder="jenis hewan"
            style={styles.input}
            // onChangeText={(em: string) => setEmail(em)}
          />
        </View> */}
          {/* <View style={styles.conterInput}>
          <Text style={styles.name}>Pilih Paket</Text>
          <TextInput
            placeholder="pilih paket"
            style={styles.input}
            // onChangeText={(em: string) => setEmail(em)}
          />
        </View> */}
          {/* <Text style={styles.payimage}>bukti pembayaran</Text>
        <View style={styles.divaddicon}>
          <TouchableOpacity>
            <Image
              style={styles.addicon}
              source={require('../assets/icon/add-image.png')}
            />
          </TouchableOpacity>
        </View> */}
          {/* <TouchableOpacity style={styles.divsend}>
          <Text style={styles.textdetail}>KIRIM</Text>
        </TouchableOpacity> */}
          {/* </ScrollView> */}
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  firstbackground: {
    width: 50,
    height: 50,
  },
  firstlogo: {
    width: 50,
    height: 50,
  },
  text1: {
    marginTop: 15,
    fontSize: 23,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: '700',
    // borderBottomWidth: 1,
    paddingBottom: 30,
  },
  truelogo: {
    width: 20,
    height: 20,
    marginLeft: 85,
    marginTop: -25,
  },

  followerslogo: {
    width: 20,
    height: 20,
    marginLeft: 115,
    marginTop: -50,
  },
  profilelogo: {
    marginTop: -20,
    marginLeft: 20,
    width: 30,
    height: 30,
  },
  profile: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: -20,
  },
  messageslogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  messages: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  activitylogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  activity: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  listlogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  list: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  repostlogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  repost: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  statisticlogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  statistic: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  signoutlogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  signout: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  sharelogo: {
    width: 30,
    height: 30,
    marginTop: 25,
    marginLeft: 20,
  },
  share: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 25,
  },
  helplogo: {
    width: 30,
    height: 30,
    marginTop: -20,
    marginLeft: 20,
  },
  help: {
    fontSize: 20,
    paddingLeft: 10,

    marginTop: -30,
  },
  stylesdrawer: {},
  // {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
  container: {
    flex: 1,
    // marginBottom: 10,
    bottom: 370,
    // width: 500,
    // backgroundColor: green,
    // height: 100,
  },
  scrollview: {
    height: 900,
    marginBottom: 50,
    paddingBottom: 50,
    bottom: 150,
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
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 50,
    borderRadius: 5,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    // backgroundColor: red,
    height: 250,
    width: 345,
  },
  textdetail: {
    elevation: 3,
    width: 150,
    height: 50,
    left: 115,
    // top: 10,
    bottom: 10,
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
    paddingTop: 15,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 2,
  },
  divsend: {
    // backgroundColor: black,
    top: 10,
    bottom: 10,
    height: 55,
    width: 0,
    // right: 5,
    // paddingLeft: 10,
    marginBottom: 30,
  },
  payimage: {
    left: 20,
    top: 13,
    fontSize: 16,
    color: 'black',
    // backgroundColor: red,
  },
});
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// interface DrawerProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Drawer: React.FC<DrawerProps> = ({isOpen, onClose}) => {
//   return (
//     <View
//       style={[
//         styles.drawerContainer,
//         isOpen ? styles.openDrawer : styles.closedDrawer,
//       ]}>
//       <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//         <Text style={styles.closeButtonText}>Close</Text>
//       </TouchableOpacity>
//       <Text>This is the drawer content</Text>
//     </View>
//   );
// };

// const App: React.FC = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleDrawer} style={styles.openButton}>
//         <Text style={styles.openButtonText}>Open Drawer</Text>
//       </TouchableOpacity>
//       {isDrawerOpen && <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   openButton: {
//     backgroundColor: '#f4511e',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   openButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   drawerContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     width: 250,
//     backgroundColor: '#fff',
//     zIndex: 999,
//     padding: 20,
//   },
//   openDrawer: {
//     left: 0,
//   },
//   closedDrawer: {
//     left: -250,
//   },
//   closeButton: {
//     marginBottom: 20,
//   },
//   closeButtonText: {
//     color: '#f4511e',
//     fontWeight: 'bold',
//   },
// });

// export default App;
{
}
// import React, {useState} from 'react';
// import {
//   Image,
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import {
//   launchCamera,
//   launchImageLibrary,
//   Asset,
// } from 'react-native-image-picker';

// const App: React.FC = () => {
//   const [imageCamera, setImageCamera] = useState<Asset | null>(null);
//   const [imageGallery, setImageGallery] = useState<Asset | null>(null);

//   const openCamera = () => {
//     const options = {
//       mediaType: 'photo',
//       quality: 1,
//     };

//     launchCamera(options, res => {
//       if (res.didCancel) {
//         console.log('User Cancelled Image picker');
//       } else if (res.errorCode) {
//         console.log(res.errorMessage);
//       } else {
//         const data = res.assets[0];
//         setImageCamera(data);
//         console.log(data);
//       }
//     });
//   };

//   const openGallery = () => {
//     const options = {
//       mediaType: 'photo',
//       quality: 1,
//     };

//     launchImageLibrary(options, res => {
//       if (res.didCancel) {
//         console.log('User Cancelled Image picker');
//       } else if (res.errorCode) {
//         console.log(res.errorMessage);
//       } else {
//         const data = res.assets[0];
//         setImageGallery(data);
//         console.log(data);
//       }
//     });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Camera</Text>
//       <View style={styles.imageContainer}>
//         {imageCamera && (
//           <Image source={{uri: imageCamera.uri}} style={styles.image} />
//         )}
//         {imageGallery && (
//           <Image source={{uri: imageGallery.uri}} style={styles.image} />
//         )}
//       </View>
//       <View style={styles.buttonContainer}>
//         <Pressable onPress={openCamera} style={styles.button}>
//           <Text>Open Camera</Text>
//         </Pressable>
//         <Pressable onPress={openGallery} style={styles.button}>
//           <Text>Open Gallery</Text>
//         </Pressable>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flexDirection: 'row',
//   },
//   image: {
//     height: 100,
//     width: 100,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//   },
//   button: {
//     padding: 10,
//     margin: 10,
//     backgroundColor: 'skyblue',
//   },
// });

// export default App;

{
}
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

// interface DrawerProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Drawer: React.FC<DrawerProps> = ({isOpen, onClose}) => {
//   return (
//     <View
//       style={[
//         styles.drawerContainer,
//         isOpen ? styles.openDrawer : styles.closedDrawer,
//       ]}>
//       {/* // style={styles.closeButton} */}

//       <Text
//         onPress={onClose}
//         style={styles.close}
//         // style={styles.closeButtonText}
//       >
//         Close
//       </Text>
//       <Text style={styles.textdrawer}>This is the drawer content</Text>
//     </View>
//   );
// };

// const App: React.FC = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleDrawer} style={styles.openButton}>
//         {/* <Text style={styles.openButtonText}>Open Drawer</Text> */}

//         <Image
//           style={styles.firstbackground}
//           source={require('../assets/icon/menu.png')}
//         />
//       </TouchableOpacity>
//       {isDrawerOpen && <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   firstbackground: {
//     width: 40,
//     height: 40,
//   },
//   openButton: {
//     // backgroundColor: '#f4511e',
//     // padding: 3,
//     borderRadius: 5,
//     marginBottom: 750,
//     marginRight: 320,
//   },
//   openButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     backgroundColor: 'orange',
//   },
//   drawerContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     width: 250,
//     backgroundColor: '#fff',
//     zIndex: 999,
//     padding: 20,
//   },
//   openDrawer: {
//     left: 0,
//     backgroundColor: 'skyblue',
//     // height: 90,
//     // paddingBottom: 50,
//   },
//   closedDrawer: {
//     left: -250,
//   },
//   closeButton: {
//     // marginBottom: 20,
//     marginTop: 20,
//     // backgroundColor: 'orange',
//   },
//   close: {
//     // backgroundColor: 'red',
//     color: 'blue',
//     fontSize: 17,
//     marginTop: 750,
//     marginLeft: 150,
//     textTransform: 'uppercase',
//   },
//   closeButtonText: {
//     color: '#f4511e',
//     fontWeight: 'bold',
//     // backgroundColor: 'red',
//     marginTop: 740,
//     // width: 30,
//   },
//   textdrawer: {
//     position: 'absolute',
//     top: 40,
//     left: 15,
//     // backgroundColor: 'red',
//   },
// });

// export default App;
