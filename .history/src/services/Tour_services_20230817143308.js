import { set } from 'mongoose';
import { instance } from './axios';
import axios from 'axios';
import { config } from '@fortawesome/fontawesome-svg-core';
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
//Edit tour
const EditItemTour = (id, tourData, config) => {
    return instance.put(`/api/v1/tours/${id}`, tourData, config);
};
//Xem các tour Featured
const fetchFeaturedTour = () => {
    return instance.get('/api/v1/tours/search/getFeaturedTour');
};
// Lấy giỏ hàng
const fetchTourCart = (config) => {
    return instance.get(`/api/v1/booking`, config);
};
//Thêm tour vào giỏ hàng
const CreateItemCart = (tourData, config) => {
    return instance.post('/api/v1/booking', tourData, config);
};
//Thêm reviews
const CreateReview = (tourId, reviewData, config) => {
    return instance.post(`api/v1/review/${tourId}`, reviewData, config);
};
//Login
const fetchLogin = (email, password) => {
    return instance.post('/api/v1/auth/login', { email, password });
};
//Lấy thông tin tài khoản
const fetchAccountDetails = (id, config) => {
    return instance.get(`/api/v1/users/${id}`, config);
};
// Update Account
const UpdateAccount = (id, accountData, config)
//Register
const fetchRegister = (registerData) => {
    return instance.post('/api/v1/auth/register', registerData);
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
    fetchTourCart,
    EditItemTour,
    CreateItemCart,
    CreateReview,
    fetchAccountDetails,
};
