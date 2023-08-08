import { instance } from './axios';
const fetchTours = (page) => {
    return instance.get(`/api/v1/tours?page=${page}`);
};
const fetchItemTour = (ID) => {
    if (ID) {
        return  instance.get(`/api/v1/tours/${ID}`);
    }
    else{
        console.log('Khong co id')
    }
};

const fetchLogin = (email, password) => {
    return instance.post(`/api/v1/users/login`, {email, password})
}
export { fetchTours, fetchItemTour };
