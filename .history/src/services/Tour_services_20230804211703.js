import { instance } from './axios';
const fetchTours = () => {
    return instance.get('/api/v1/tours');
};
const fetchItemTour = á (id) => {
    return instance.get(`/api/v1/tours/${id}`);
};
export { fetchTours, fetchItemTour };
