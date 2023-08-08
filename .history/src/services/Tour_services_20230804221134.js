import { instance } from './axios';
const fetchTours = () => {
    return instance.get('/api/v1/tours');
};
const fetchItemTour = (id) => {
    console.log(fetchItemTour)
    if (id) {
        return instance.get(`/api/v1/tours/${id}`);
    }
};
export { fetchTours, fetchItemTour };
