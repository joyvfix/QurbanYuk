// import React, {useState} from 'react';
// import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
// import {green, greenyoung, red} from '../utils/color';

// type Tab = {
//   title: string;
//   content: JSX.Element;
// };

// type TabViewProps = {
//   tabs: Tab[];
// };

// const TabView: React.FC<TabViewProps> = ({tabs}) => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabPress = (index: number) => {
//     setActiveTab(index);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.tabsContainer}>
//         {tabs.map((tab, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.tabButton,
//               activeTab === index && styles.activeTabButton,
//             ]}
//             onPress={() => handleTabPress(index)}>
//             <Text
//               style={[
//                 styles.tabButtonText,
//                 activeTab === index && styles.activeTabButtonText,
//               ]}>
//               {tab.title}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.contentContainer}>{tabs[activeTab].content}</View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#f2f2f2',
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   activeTabButton: {
//     borderBottomWidth: 2,
//     // borderBottomColor: '#333',
//     borderBottomColor: green,
//   },
//   tabButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     // color: red,
//   },
//   activeTabButtonText: {
//     color: green,
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 15,
//     fontSize: 10,
//     // backgroundColor: greenyoung,
//   },
// });

// export default TabView;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
import React from 'react';
import {Pressable, Text, View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ComponentProduk from '../components/ComponentProduk';
import ComponentDelivery from './ComponentDelivery';
import EditProfil from './EditProfil';
import PaymentScreen from './PaymentScreen';
import Product from './Product';
import LogoutAdmin from './LogoutAdmin';

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    {/* <ComponentProduk /> */}
    <Product />
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    <ComponentDelivery />
  </View>
);

const ThirdRoute = () => (
  <View style={{flex: 1, backgroundColor: '#8BC34A'}}>
    <PaymentScreen />
  </View>
);

const FourthRoute = () => (
  <View style={{flex: 1, backgroundColor: '#0277BD'}}>
    <EditProfil />
  </View>
);
const FifthRoute = () => (
  <View style={{flex: 1, backgroundColor: '#0277BD'}}>
    {/* <Pressable
      onPress={openGallery}
      style={{padding: 10, margin: 10, backgroundColor: 'skyblue'}}>
      <Text>Open Gallery</Text>
    </Pressable> */}
    <LogoutAdmin />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'green'}}
    style={{backgroundColor: 'white'}}
    activeColor="green"
    inactiveColor="grey"
    labelStyle={{fontWeight: 'bold', fontFamily: 'roboto', fontSize: 12.7}}
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Product'},
    {key: 'second', title: 'Delivery'},
    {key: 'third', title: 'Payment'},
    {key: 'fourth', title: 'User'},
    {key: 'fifth', title: 'logout'},
  ]);

  return (
    <View style={{flex: 1}}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        tabBarPosition="top"
      />
    </View>
  );
}
