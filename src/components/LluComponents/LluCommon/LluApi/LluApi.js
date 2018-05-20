import axios from 'axios';

function getStaysDummy() {
    const url = 'https://private-6e0d4-feedproducts.apiary-mock.com/feed';
    return axios.get(url).then(response => response.data);
}

export {getStaysDummy}