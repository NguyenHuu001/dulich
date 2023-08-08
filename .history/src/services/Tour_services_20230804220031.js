import { instance } from './axios';
const fetchTours = () => {
    return instance.get('/api/v1/tours');
};
const fetchItemTour = (id) => {
    // console.log(id);
    return instance.get(`/api/v1/tours/643156803ca59590d379c7f2`);
};
export { fetchTours, fetchItemTour };
