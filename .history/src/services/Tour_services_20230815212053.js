import { set } from 'mongoose';
import { instance } from './axios';
import axios from 'axios';
//Hiện từng trang
const fetchTours = (page) => {
    return instance.get(`/api/v1/tours?page=${page}`);
};
//Xem chi tiết tour
const fetchItemTour = (ID) => {
    if (ID) {
        return instance.get(`/api/v1/tours/${ID}`);
    } else {
        console.log('Khong co id');
    }
};
// Tạo tour mới
const CreateItemTour = (tourData, config) => {
    return instance.post('/api/v1/tours', tourData, config);
};
//Xóa tour
const DeleteItemTour = (id, config) => {
    return instance.delete(`/api/v1/tours/${id}`, config);
};
//Xem các tour Featured
const fetchFeaturedTour = () => {
    return instance.get('/api/v1/tours/search/getFeaturedTour');
};
// Lấy giỏ hàng 
const fetchTourCart = (id) => {
    return instance.get(`/api/v1/booking/${id}`)
}
//Login
const fetchLogin = (email, password) => {
    return instance.post('/api/v1/auth/login', { email, password });
};
//Register
const fetchRegister = (username, email, password) => {
    return instance.post('/api/v1/auth/register', username, email, password);
};
// Tìm kiếm Tour
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
export {
    fetchTours,
    fetchItemTour,
    fetchLogin,
    fetchSearchTour,
    fetchRegister,
    fetchFeaturedTour,
    CreateItemTour,
    DeleteItemTour,
};
