// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, {useState, useEffect} from 'react';
// import {View, Text, TextInput, Button} from 'react-native';

// interface Delivery {
//   id: number;
//   nama: string;
//   alamat: string;
//   created_at: string;
// }

// const DeliveryCRUD: React.FC = () => {
//   const [deliveries, setDeliveries] = useState<Delivery[]>([]);
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [editId, setEditId] = useState<number | null>(null);
//   const [date, setDate] = useState('');

//   useEffect(() => {
//     AsyncStorage.getItem('token').then(value => {
//       var myHeaders = new Headers();
//       myHeaders.append('Authorization', `Bearer ${value}`);

//       var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         redirect: 'follow',
//       };

//       fetch(
//         'https://40ca-2001-448a-4041-465f-7805-82da-d33d-3376.ngrok-free.app/api/admin/showPesanan',
//         requestOptions,
//       )
//         .then(response => response.json())
//         .then(result => {
//           console.log(result);
//           setDeliveries(result.data);
//         })
//         .catch(error => console.log('error', error));
//     });
//   }, []);

//   return (
//     <View>
//       <Text>Create or Edit Delivery:</Text>
//       <TextInput value={name} onChangeText={setName} placeholder="Name" />
//       <TextInput
//         value={address}
//         onChangeText={setAddress}
//         placeholder="Address"
//       />

//       <Text>Deliveries:</Text>
//       {deliveries.map(delivery => (
//         <View key={delivery.id}>
//           <Text>{delivery.nama}</Text>
//           <Text>{delivery.alamat}</Text>
//           <Text>Date: {delivery.created_at}</Text>
//           <Button title="Edit" />
//           <Button title="Delete" />
//         </View>
//       ))}
//     </View>
//   );
// };

// export default DeliveryCRUD;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

interface Delivery {
  id: number;
  nama: string;
  alamat: string;
  created_at: string;
  status_pembayaran: string;
  no_tlp: number;
  id_produk: number;
}

const DeliveryCRUD: React.FC = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [date, setDate] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('token').then(value => {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${value}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(
        'https://40ca-2001-448a-4041-465f-7805-82da-d33d-3376.ngrok-free.app/api/admin/showPesanan',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setDeliveries(result.data);
        })
        .catch(error => console.log('error', error));
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Create or Edit Delivery:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      /> */}

      <Text style={styles.heading}>Deliveries:</Text>
      {deliveries.map(delivery => (
        <View key={delivery.id} style={styles.deliveryContainer}>
          <Text style={styles.deliveryId}>{delivery.id}</Text>
          <Text style={styles.deliveryName}>{delivery.nama}</Text>
          <Text style={styles.deliveryAddress}>{delivery.alamat}</Text>
          <Text style={styles.deliveryDate}>pesan: {delivery.created_at}</Text>
          <Text style={styles.deliveryPay}>
            status: {delivery.status_pembayaran}
            <Text style={styles.deliverytlp}> no tlp: {delivery.no_tlp}</Text>
            <Text style={styles.deliverytlp}>
              id produk: {delivery.id_produk}
            </Text>
          </Text>

          <Button title="Edit" />
          <Button title="Delete" />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  deliveryContainer: {
    marginBottom: 16,
    // flexDirection: 'column',
  },
  deliveryName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  deliveryAddress: {
    fontSize: 14,
    marginBottom: 4,
  },
  deliveryDate: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 4,
  },
  deliveryPay: {
    fontSize: 14,
    marginBottom: 4,
    color: 'gray',
  },
  deliveryId: {
    fontSize: 14,
    marginBottom: 4,
    color: 'gray',
  },
  deliverytlp: {
    fontSize: 14,
    marginBottom: 4,
    color: 'gray',
  },
});

export default DeliveryCRUD;
