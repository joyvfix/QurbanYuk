// });
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';

interface Todo {
  id: string;
  title: string;
  date: string;
}

interface listData {
  id: number;
  produk: string;
  kualitas: string;
  harga: number;
  stok: number;
  gambar: string;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editTodoId, setEditTodoId] = useState('');
  const [data, setData] = useState<listData[]>([]);
  useEffect(() => {
    // Fetch todos from API or local storage
    // For simplicity, we'll use static data
    // Get the screen dimensions
  });
  const {width, height} = Dimensions.get('window');

  // Define responsive styles based on screen dimensions
  const styles = {
    container: {
      flex: 1,
      padding: 16,
    },
    input: {
      marginBottom: 8,
      padding: 8,
      borderColor: 'gray',
      borderWidth: 1,
    },
    todoItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
      padding: 8,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
    },
    todoTitle: {
      flex: 1,
      marginRight: 8,
    },
    todoDate: {
      width: width * 0.3, // Adjust the width based on screen width
    },
    todoButtons: {
      flexDirection: 'row',
    },
    button: {
      marginLeft: 4,
    },
  };
  useEffect(() => {
    AsyncStorage.getItem('token').then(value => {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${value}`);

      var formdata = new FormData();

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://40ca-2001-448a-4041-465f-7805-82da-d33d-3376.ngrok-free.app/api/admin/showProduk',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setData(result.data);
        })
        .catch(error => console.log('error', error));
    });
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter todo title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Button title={editMode ? 'Update Todo' : 'Add Todo'} />
      {data.map((value, index) => (
        <View key={index}>
          <Text>{value.produk}</Text>
          <Text>{value.kualitas}</Text>
          <Text>{value.harga}</Text>
          <Text>{value.stok}</Text>
        </View>
      ))}
    </View>
  );
};

export default App;
