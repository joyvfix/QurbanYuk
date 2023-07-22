// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// interface Tab {
//   title: string;
//   content: string;
// }

// const Tabs: React.FC<{tabs: Tab[]}> = ({tabs}) => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabPress = (index: number) => {
//     setActiveTab(index);
//   };
//   const Tabs = [
//     {
//       title: 'Tab 1',
//       content: 'This is the content of Tab 1',
//     },
//     {
//       title: 'Tab 2',
//       content: 'This is the content of Tab 2',
//     },
//     {
//       title: 'Tab 3',
//       content: 'This is the content of Tab 3',
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.tabs}>
//         {tabs.map((tab, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[styles.tab, activeTab === index && styles.activeTab]}
//             onPress={() => handleTabPress(index)}>
//             <Text style={styles.tabText}>{tab.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.tabContent}>
//         <Text>{tabs[activeTab].content}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   tabs: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//   },
//   tab: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 2,
//     borderBottomColor: 'transparent',
//   },
//   activeTab: {
//     borderBottomColor: 'blue',
//   },
//   tabText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   tabContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
// });

// export default Tabs;
import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

type Tab = {
  title: string;
  content: JSX.Element;
};

type TabViewProps = {
  tabs: Tab[];
};

const TabView: React.FC<TabViewProps> = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              activeTab === index && styles.activeTabButton,
            ]}
            onPress={() => handleTabPress(index)}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === index && styles.activeTabButtonText,
              ]}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentContainer}>{tabs[activeTab].content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activeTabButtonText: {
    color: '#333',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
});

export default TabView;
