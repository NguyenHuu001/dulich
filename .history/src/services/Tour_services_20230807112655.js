import { instance } from './axios';
import axios from 'axios';
const fetchTours = (page) => {
    return instance.get(`/api/v1/tours?page=${page}`);
};
const fetchItemTour = (ID) => {
    if (ID) {
        return instance.get(`/api/v1/tours/${ID}`);
    } else {
        console.log('Khong co id');
    }
};

const fetchLogin = (email, password) => {
    return instance.post('/api/v1/auth/login', { email, password });
};

const fetchSearchTour = (city, distance, maxGS) => {
    return instance.get(`/api/v1/tours/search/getTourBySearch/?city=${city}&distance=${}&maxGroupSize=3`);
};
export { fetchTours, fetchItemTour, fetchLogin, fetchSearchTour };
