// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import AdminPage from './scree/AdminPage';

// const App: React.FC = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <AdminPage />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// import React from 'react';
// import {View, Text, Button} from 'react-native';

// const AdminPage: React.FC = () => {
//   const handleLogout = () => {
//     // Logic for logging out the admin user
//   };

//   return (
//     <View>
//       <Text>Welcome to the Admin Page!</Text>
//       <Button title="Logout" onPress={handleLogout} />
//     </View>
//   );
// };

// export default AdminPage;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
//// Import library yang diperlukan
import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';

// Komponen halaman admin
const AdminPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fungsi untuk menangani login admin
  const handleLogin = () => {
    // Periksa apakah username dan password valid
    if (username === 'admin' && password === 'admin123') {
      // Jika valid, tampilkan pesan sukses
      Alert.alert('Login Successful');
    } else {
      // Jika tidak valid, tampilkan pesan error
      Alert.alert('Login Failed');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default AdminPage;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// import React, {useState} from 'react';
// import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

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
//     borderBottomColor: '#333',
//   },
//   tabButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   activeTabButtonText: {
//     color: '#333',
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 16,
//   },
// });

// export default TabView;
