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
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  Asset,
} from 'react-native-image-picker';

const App: React.FC = () => {
  const [imageCamera, setImageCamera] = useState<Asset | null>(null);
  const [imageGallery, setImageGallery] = useState<Asset | null>(null);

  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('User Cancelled Image picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImageCamera(data);
        console.log(data);
      }
    });
  };

  const openGallery = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(option, res => {
      if (res.didCancel) {
        console.log('User Cancelled Image picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImageGallery(data);
        console.log(data);
      }
    });
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text>Camera</Text> */}
      <View style={{flexDirection: 'row'}}>
        {imageCamera != null && (
          <Image
            source={{uri: imageCamera.uri}}
            style={{height: 150, width: 200}}
          />
        )}
        {imageGallery != null && (
          <Image
            source={{uri: imageGallery.uri}}
            style={{height: 100, width: 100}}
          />
        )}
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Pressable
            onPress={openCamera}
            style={{padding: 10, margin: 10, backgroundColor: 'skyblue'}}>
            <Text>Open Camera</Text>
          </Pressable>
        </TouchableOpacity>
        <Pressable
          onPress={openGallery}
          style={{padding: 10, margin: 10, backgroundColor: 'skyblue'}}>
          <Text>Open Gallery</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
