import { instance } from './axios';
const fetchTours = () => {
    return instance.get(
        '/api/v1/tours',
    );
};
const fetchItemTour = () => {
    return instance.get
}
export { fetchTours };
