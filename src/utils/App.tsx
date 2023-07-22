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

// import {Text, StyleSheet, View, DrawerLayoutAndroid} from 'react-native';
// import React, {Component} from 'react';
// import Splash from './screen/Splash';
// import Login from './screen/Login';
// import Drawer from './screen/Drawer';
// import Loginig from './screen/Loginig';
// import Crud from './screen/Crud';

// export default class App extends Component {
//   render() {
//     return <Loginig />;
//   }
// }
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}

import {View, Text} from 'react-native';
import React from 'react';
import Router from '../router';
// import Drawer from '../screen/Drawer';
import Splash from '../screen/Splash';
import Register from '../screen/Register';

import DetailSapi from '../screen/DetailSapi';
import DetailDomba from '../screen/DetailDomba';
import Componentinput from '../screen/Componentinput';
import Beranda from '../screen/Beranda';
import Login from '../screen/Login';
import PaketQurban from '../screen/PaketQurban';
import Gesture from '../components/Gesture';

const App = () => {
  return <Router />;
};

export default App;
// {:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}

// // In App.js in a new project

// import React, {Component} from 'react';
// import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
// // import RootNavigator from './assets/navigation/RootNavigator';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from './src/screen/Login';
// import Profile from './src/screen/Profile';

// const Stack = createNativeStackNavigator();
// // const Stack = createNativeStackNavigator<Rootstakparams>();

// // export type Rootstakparams = {
// //   // firstpage: undefined;
// //   // loginscreen: undefined;
// //   // listscreen: undefined;
// //   // // drawer: undefined;
// //   login: undefined;
// //   profile: undefined;
// //   // register: undefined;
// //   // // drawerexample: undefined;
// //   // homescreen: undefined;
// //   detailproduct: {no_id: number};
// // };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* <Stack.Screen
//           // options={{headerShown: false}}
//           name="Login"
//           component={Login}
//         /> */}
//         <Stack.Screen name="profile" component={Profile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// // export default App;
// // const Styles = StyleSheet.create({});
