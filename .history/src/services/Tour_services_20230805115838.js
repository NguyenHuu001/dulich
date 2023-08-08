import { instance } from './axios';
const fetchTours = (page) => {
    return instance.get(`/api/v1/tours?page=${}`);
};
const fetchItemTour = (ID) => {
    if (ID) {
        return  instance.get(`/api/v1/tours/${ID}`);
    }
    else{
        console.log('Khong co id')
    }
};
export { fetchTours, fetchItemTour };
