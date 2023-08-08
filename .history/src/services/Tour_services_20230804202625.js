import { instance } from './axios';
const fetchTours = () => {
    return instance.get('/api/v1/tours');
};
const fetchItemTour = (id) => {
    return instance.get(`/api/v1/tours/`);
};
export { fetchTours, fetchItemTour };
