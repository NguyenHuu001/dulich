import axios from "axios";

const fetchTours = () => {
   return axios
        .get(
            'http://localhost:4000/api/v1/tours?gidzl=jz1wEaX281AuoNawHbqX5xZ1UZfHLoL2hiDrP5W594kibtrWNLDsIwlEBMDQKdGRgy5vF3B7fMWUGa0b4m',
        )
        .then((data) => {
            console.log(data);
        });
};
export { fetchTours };
