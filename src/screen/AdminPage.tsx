// // import {StyleSheet, Text, View} from 'react-native';
// // import React from 'react';

// // const AdminPage = () => {
// //   return (
// //     <View>
// //       <Text>AdminPage</Text>
// //     </View>
// //   );
// // };

// // export default AdminPage;

// // const styles = StyleSheet.create({});
// // {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ComponentAdmin from '../components/ComponentAdmin';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ComponentAdmin />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { Tab, TabView } from '@rneui/themed';

// const App: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   return (
//     <>
//       <Tab
//         value={index}
//         onChange={(e: number) => setIndex(e)}
//         indicatorStyle={{
//           backgroundColor: 'white',
//           height: 3,
//         }}
//         variant="primary"
//       >
//         <Tab.Item
//           title="Recent"
//           titleStyle={{ fontSize: 12 }}
//           icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
//         />
//         <Tab.Item
//           title="favorite"
//           titleStyle={{ fontSize: 12 }}
//           icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
//         />
//         <Tab.Item
//           title="cart"
//           titleStyle={{ fontSize: 12 }}
//           icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
//         />
//       </Tab>

//       <TabView value={index} onChange={setIndex} animationType="spring">
//         <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
//           <View>
//             <Text>Recent</Text>
//           </View>
//         </TabView.Item>
//         <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
//           <View>
//             <Text>Favorite</Text>
//           </View>
//         </TabView.Item>
//         <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
//           <View>
//             <Text>Cart</Text>
//           </View>
//         </TabView.Item>
//       </TabView>
//     </>
//   );
// };

// export default App;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// import React, {useState} from 'react';
// import {Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
// import {TabView, SceneMap, SceneRendererProps} from 'react-native-tab-view';

// interface Route {
//   key: string;
//   title: string;
// }

// const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

// const SecondRoute = () => (
//   <View style={{flex: 1, backgroundColor: '#673ab7'}} />
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// const TabViewExample: React.FC = () => {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = useState<number>(0);
//   const [routes] = useState<Route[]>([
//     {key: 'first', title: 'First'},
//     {key: 'second', title: 'Second'},
//   ]);

//   const onIndexChange = (newIndex: number) => {
//     setIndex(newIndex);
//   };

//   const renderTabBar = (
//     props: SceneRendererProps & {
//       navigationState: {routes: Route[]};
//       position: any;
//     },
//   ) => {
//     return (
//       <View style={{flexDirection: 'row'}}>
//         {props.navigationState.routes.map((route, i) => (
//           <TouchableOpacity
//             key={route.key}
//             style={{
//               flex: 1,
//               backgroundColor: index === i ? '#2196f3' : '#cccccc',
//             }}
//             onPress={() => onIndexChange(i)}>
//             <Text style={{textAlign: 'center', margin: 8}}>{route.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   };

//   return (
//     <TabView
//       navigationState={{index, routes}}
//       renderScene={renderScene}
//       onIndexChange={onIndexChange}
//       initialLayout={{width: layout.width}}
//       renderTabBar={renderTabBar}
//     />
//   );
// };

// export default TabViewExample;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
