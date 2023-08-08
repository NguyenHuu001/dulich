import axios from 'axios';
import 
const fetchTours = () => {
    return axios
        .get(
            '/api/v1/tours?gidzl=jz1wEaX281AuoNawHbqX5xZ1UZfHLoL2hiDrP5W594kibtrWNLDsIwlEBMDQKdGRgy5vF3B7fMWUGa0b4m',
        )
            
};
export { fetchTours };
