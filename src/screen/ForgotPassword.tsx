// import React, {useState} from 'react';
// import {
//   View,
//   TextInput,
//   Button,
//   Alert,
//   StyleSheet,
//   Platform,
// } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     width: '100%',
//     marginTop: 10,
//   },
// });

// const ForgotPasswordForm: React.FC = () => {
//   const [email, setEmail] = useState('');

//   const handleEmailChange = (text: string) => {
//     setEmail(text);
//   };

//   // const handleSubmit = () => {
//   //   // Here you can implement your logic to handle the forgot password request
//   //   // For this example, let's just display an alert with the entered email
//   //   Alert.alert('Forgot Password', `Email: ${email}`, [
//   //     {
//   //       text: 'ok',
//   //     },
//   //   ]);
//   // };

//   const handleSubmit = () => {
//     // Here you can implement your logic to handle the forgot password request
//     // For this example, let's just display an alert with the entered email
//     Alert.alert(
//       'Forgot Password',
//       `Email: ${email}`,
//       Platform.OS === 'web' ? [{text: 'OK'}] : undefined,
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={handleEmailChange}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <Button style={styles.button} title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// export default ForgotPasswordForm;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
import React, {useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
});

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // Make the API call to handle the forgot password request
      const response = await fetch(`${API_BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });

      const data = await response.json();

      if (response.ok) {
        // API call successful
        Alert.alert('Success', data.message);
      } else {
        // API call failed
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button
        style={styles.button}
        title={loading ? 'Loading...' : 'Submit'}
        onPress={handleSubmit}
        disabled={loading}
      />
    </View>
  );
};

export default ForgotPasswordForm;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
