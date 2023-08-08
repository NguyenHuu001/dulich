import { instance } from './axios';
const fetchTours = () => {
    return instance.get('/api/v1/tours');
};
const fetchItemTour = await (id) => {
    if (id) {
        return  instance.get(`/api/v1/tours/${id}`);
    }
    else{
        console.log('Khong co id')
    }
};
export { fetchTours, fetchItemTour };
