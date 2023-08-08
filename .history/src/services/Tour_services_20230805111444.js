import { instance } from './axios';
const fetchTours = () => {
    return instance.get('/api/v1/tours');
};
const fetchItemTour = (id) => {
    if (id) {
        return await instance.get(`/api/v1/tours/${id}`);
    }
    else{
        console.log('Khong co id')
    }
};
export { fetchTours, fetchItemTour };
