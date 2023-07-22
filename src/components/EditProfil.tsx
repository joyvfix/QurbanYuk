import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router/index';

const EditProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const storedName = await AsyncStorage.getItem('name');
      const storedBio = await AsyncStorage.getItem('bio');
      if (storedName !== null) {
        setName(storedName);
      }
      if (storedBio !== null) {
        setBio(storedBio);
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('bio', bio);
      console.log('Data saved successfully!');
      navigation.goBack();
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };

  const ProfileScreen = () => {
    navigation.navigate('profilescreen');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
      />
      <TouchableOpacity style={styles.saveButton} onPress={saveData}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={ProfileScreen}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#888',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default EditProfileScreen;
