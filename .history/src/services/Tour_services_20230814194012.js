import { set } from 'mongoose';
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
const CreateItemTour = ({title,city,address,distance,price,maxGroupSize,desc,photo,featured}, role) => {
    return instance.post('/api/v1/tours',{title,city,address,distance,price,maxGroupSize,desc,photo,featured}, role,);
};
const fetchFeaturedTour = () => {
    return instance.get('/api/v1/tours/search/getFeaturedTour');
};
const fetchLogin = (email, password) => {
    return instance.post('/api/v1/auth/login', { email, password });
};

const fetchRegister = (username, email, password) => {
    return instance.post('/api/v1/auth/register', username, email, password);
};
const fetchSearchTour = (city, distance, maxGS) => {
    if (city || distance || maxGS) {
        if (!distance && !maxGS) {
            distance = 1;
            maxGS = 1;
        }
        return instance.get(
            `/api/v1/tours/search/getTourBySearch/?city=${city}&distance=${distance}&maxGroupSize=${maxGS}`,
        );
    }
};
export { fetchTours, fetchItemTour, fetchLogin, fetchSearchTour, fetchRegister, fetchFeaturedTour, CreateItemTour };
