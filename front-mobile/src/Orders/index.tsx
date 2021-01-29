import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, Text } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { API_URL, fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {


  const navigation = useNavigation();
  const handleOnPress = (order : Order) => {
    navigation.navigate('OrderDetails', {order});
  }

  const isFocused = useIsFocused();
  const fetchData = () => {
    setIsLoading(true);
    console.log(`${API_URL}/orders`);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert("Houve um erro ao buscar os pedidos"))
      .finally(() => setIsLoading(false));
  }

  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);


  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text>Buscando pedidos...</Text>
        ) : (
          orders.map(order => (
            <TouchableWithoutFeedback 
            key={order.id}
            onPress={() => handleOnPress(order)}
            >
              <OrderCard 
              order={order}
              />
            </TouchableWithoutFeedback>
          ))
        )
      }
        
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  }
});

export default Orders;
