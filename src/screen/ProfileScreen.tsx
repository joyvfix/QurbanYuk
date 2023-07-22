// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const ProfileScreen = () => {
//   return (
//     <View>
//       <Text>ProfileScreen</Text>
//     </View>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({});
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  DrawerLayoutAndroid,
  Alert,
} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  MediaType,
} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../router/index';
import {green, red} from '../utils/color';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'profilescreen'
>;

type ProfileScreenRouteProp = RouteProp<RootStackParams, 'profilescreen'>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation, route}) => {
  const [image, setImage] = useState<string | null>(null);
  const drawerRef = useRef<DrawerLayoutAndroid>(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    retrieveData();
  }, []);

  const openCamera = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      quality: 1,
    };
    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('Kamera dibatalkan');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets?.[0]?.uri;
        setImage(data || null);
        console.log(data);
        AsyncStorage.setItem('profileImage', data || '');
      }
    });
  };

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

      const {name: paramName, bio: paramBio} = route.params || {};
      if (paramName) {
        setName(paramName);
      }
      if (paramBio) {
        setBio(paramBio);
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
      navigation.navigate('profilescreen');
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      quality: 1,
    };
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('Galeri dibatalkan');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets?.[0]?.uri;
        setImage(data || null);
        console.log(data);
        AsyncStorage.setItem('profileImage', data || '');
      }
    });
  };

  const changeProfilePicture = () => {
    Alert.alert(
      'Ganti Profil',
      'Pilih sumber gambar baru:',
      [
        {
          text: 'Buka Kamera',
          onPress: openCamera,
        },
        {
          text: 'Buka Galeri',
          onPress: openGallery,
        },
        {
          text: 'Batal',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };

  const navigationView = (
    <View style={{backgroundColor: red, flex: 1}}>
      <TouchableOpacity onPress={() => drawerRef.current?.closeDrawer()}>
        <Image
          source={require('../assets/icon/arrow.png')}
          style={{width: 30, height: 30, left: 5, top: 5}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );

  const openDrawer = () => {
    drawerRef.current?.openDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => navigationView}
      style={{flex: 1}}>
      <TouchableOpacity style={styles.drawerButton} onPress={openDrawer}>
        <Image
          source={require('../assets/icon/whitebarmenu.png')}
          style={styles.drawerButtonIcon}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profilePictureContainer}
          onPress={changeProfilePicture}>
          {image ? (
            <Image style={styles.profilePicture} source={{uri: image}} />
          ) : (
            <Text style={styles.placeholderText}>Pilih Gambar</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.bioText}>{bio}</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('editprofil')}>
          <Text style={styles.editButtonText}>Edit Profil</Text>
        </TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  profilePictureContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bioText: {
    fontSize: 16,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: green,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  drawerButton: {
    position: 'absolute',
    padding: 10,
    zIndex: 1,
  },
  drawerButtonIcon: {
    width: 30,
    height: 30,
  },
  logoutText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 680,
    left: 90,
  },
});

export default ProfileScreen;
