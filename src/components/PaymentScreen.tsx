// import React, {useEffect, useState} from 'react';
// import {View, Text, Button} from 'react-native';
// import {
//   Payment,
//   createPayment,
//   deletePayment,
//   getPayments,
//   updatePayment,
// } from './Payment';

// const PaymentScreen = () => {
//   const [payments, setPayments] = useState<Payment[]>([]);

//   useEffect(() => {
//     loadPayments();
//   }, []);

//   const loadPayments = async () => {
//     try {
//       const payments = await getPayments();
//       setPayments(payments);
//     } catch (error) {
//       // Handle error
//     }
//   };

//   const handleCreatePayment = async () => {
//     const newPayment: Payment = {
//       id: 1,
//       amount: 100,
//       description: 'New payment',
//     };

//     try {
//       const createdPayment = await createPayment(newPayment);
//       setPayments([...payments, createdPayment]);
//     } catch (error) {
//       // Handle error
//     }
//   };

//   const handleUpdatePayment = async (payment: Payment) => {
//     try {
//       const updatedPayment = await updatePayment(payment);
//       const updatedPayments = payments.map(p =>
//         p.id === updatedPayment.id ? updatedPayment : p,
//       );
//       setPayments(updatedPayments);
//     } catch (error) {
//       // Handle error
//     }
//   };

//   const handleDeletePayment = async (paymentId: number) => {
//     try {
//       await deletePayment(paymentId);
//       const updatedPayments = payments.filter(p => p.id !== paymentId);
//       setPayments(updatedPayments);
//     } catch (error) {
//       // Handle error
//     }
//   };

//   return (
//     <View>
//       <Button title="Create Payment" onPress={handleCreatePayment} />
//       {payments.map(payment => (
//         <View key={payment.id}>
//           <Text>{payment.description}</Text>
//           <Button title="Update" onPress={() => handleUpdatePayment(payment)} />
//           <Button
//             title="Delete"
//             onPress={() => handleDeletePayment(payment.id)}
//           />
//         </View>
//       ))}
//     </View>
//   );
// };

// export default PaymentScreen;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// import React, {useState, useEffect} from 'react';
// import {View, Text, FlatList, TouchableOpacity} from 'react-native';

// interface Payment {
//   id: number;
//   amount: number;
//   date: string;
// }

// const PaymentHistoryScreen: React.FC = () => {
//   const [payments, setPayments] = useState<Payment[]>([]);

//   useEffect(() => {
//     // Fetch payments from an API or local storage
//     fetchPayments();
//   }, []);

//   const fetchPayments = async () => {
//     try {
//       // Replace this with your API call or local storage retrieval logic
//       const response = await fetch('https://example.com/payments');
//       const data = await response.json();
//       setPayments(data);
//     } catch (error) {
//       console.error('Error fetching payments:', error);
//     }
//   };

//   const deletePayment = async (id: number) => {
//     try {
//       // Replace this with your API call or local storage deletion logic
//       await fetch(`https://example.com/payments/${id}`, {
//         method: 'DELETE',
//       });
//       setPayments(payments.filter(payment => payment.id !== id));
//     } catch (error) {
//       console.error('Error deleting payment:', error);
//     }
//   };

//   const renderItem = ({item}: {item: Payment}) => (
//     <View>
//       <Text>Amount: {item.amount}</Text>
//       <Text>Date: {item.date}</Text>
//       <TouchableOpacity onPress={() => deletePayment(item.id)}>
//         <Text>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View>
//       <FlatList
//         data={payments}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default PaymentHistoryScreen;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';

interface Payment {
  id: string;
  amount: number;
  date: string;
}

const PaymentHistoryScreen: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    // Fetch payments from an API or local storage
    fetchPayments();
  }, []);

  const fetchPayments = () => {
    // Implement your logic to fetch payments
    // For simplicity, I'll just populate dummy data here
    const dummyPayments: Payment[] = [
      {id: '1', amount: 10, date: '2023-06-01'},
      {id: '2', amount: 20, date: '2023-06-02'},
      {id: '3', amount: 30, date: '2023-06-03'},
    ];

    setPayments(dummyPayments);
  };

  const addPayment = () => {
    // Generate a unique ID for the new payment
    const newPayment: Payment = {
      id: String(Math.random()),
      amount: parseFloat(amount),
      date: date,
    };

    setPayments([...payments, newPayment]);
    setModalVisible(false);
  };

  const updatePayment = () => {
    if (selectedPayment) {
      const updatedPayments = payments.map(payment => {
        if (payment.id === selectedPayment.id) {
          return {
            ...payment,
            amount: parseFloat(amount),
            date: date,
          };
        }
        return payment;
      });

      setPayments(updatedPayments);
      setModalVisible(false);
    }
  };

  const deletePayment = (payment: Payment) => {
    const updatedPayments = payments.filter(p => p.id !== payment.id);
    setPayments(updatedPayments);
  };

  const renderPaymentItem = ({item}: {item: Payment}) => (
    <TouchableOpacity onPress={() => setSelectedPayment(item)}>
      <View
        style={{padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
        <Text>Amount: {item.amount}</Text>
        <Text>Date: {item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, paddingTop: 50}}>
      <Button title="Add Payment" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType="slide">
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            placeholder="Amount"
            value={amount}
            onChangeText={text => setAmount(text)}
            style={{
              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
              width: '80%',
            }}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Date"
            value={date}
            onChangeText={text => setDate(text)}
            style={{
              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
              width: '80%',
            }}
          />
          <Button
            title={selectedPayment ? 'Update Payment' : 'Add Payment'}
            onPress={selectedPayment ? updatePayment : addPayment}
          />
          <Button
            title="Cancel"
            onPress={() => {
              setSelectedPayment(null);
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>

      <FlatList
        data={payments}
        renderItem={renderPaymentItem}
        keyExtractor={item => item.id}
      />

      {selectedPayment && (
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Selected Payment:</Text>
          <Text>Amount: {selectedPayment.amount}</Text>
          <Text>Date: {selectedPayment.date}</Text>
          <Button
            title="Delete Payment"
            onPress={() => deletePayment(selectedPayment)}
          />
        </View>
      )}
    </View>
  );
};

export default PaymentHistoryScreen;
