import React from 'react';
import axios from "axios";
import { Linking } from 'react-native';

export const API_URL = 'https://curso-sds2.herokuapp.com'
//export const API_URL = 'http://192.168.0.23:8080'
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination='

export function fetchOrders() {
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId : number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}

export function navigateGoogleMaps(lat:number, lng:number) {
    Linking.openURL(`${GOOGLE_MAPS_URL}${lat},${lng}`);

}