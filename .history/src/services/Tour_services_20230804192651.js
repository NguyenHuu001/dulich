import { instance } from './axios';
const fetchTours = () => {
    return instance.get(
        '/api/v1/tours',
    );
};
const fetchItemTour = () => {
    return instance.get('/api/v1/tours/643156803ca59590d379c7ec')
}
export { fetchTours, fetchItemTour };