import { instance } from './axios';
const fetchTours = () => {
    return instance.get('/api/v1/tourspa');
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
