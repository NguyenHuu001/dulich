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

const fetchLogin = (emai, pas) => {
    return instance.post(`/api/v1/users/login`)
}
export { fetchTours, fetchItemTour };
