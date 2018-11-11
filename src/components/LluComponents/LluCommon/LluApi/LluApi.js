import axios from 'axios';

const BASE_URL = 'https://www.lluqi.com';

function getStaysDummy() {
    const url = 'https://private-6e0d4-feedproducts.apiary-mock.com/feed';
    return axios.get(url).then(response => response.data);
}

function getHostels(page) {
    const url = `${BASE_URL}/administrator/api/hostels?page=${page}`;
    return axios.get(url).then(response => {
        return response.data.data;
    });
}

function getHostel(id) {
    const url = `${BASE_URL}/administrator/api/hostels/${id}`;
    return axios.get(url).then(response => {
        return response.data;
    });
}

function getChats() {
    const url = `${BASE_URL}/administrator/api/chat`;
    const token = sessionStorage.getItem('access_token');
    return axios.get(url,
        {
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                Authorization: `Bearer ${token}`
            }
        }
    ).then(response => {
        return response.data;
    });
}

function getChat(id) {
    const url = `${BASE_URL}/administrator/api/chat/${id}`;
    const token = sessionStorage.getItem('access_token');
    return axios.get(url,
        {
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                Authorization: `Bearer ${token}`
            }
        }
    ).then(response => {
        return response.data;
    });
}

function postCommentChat(id, message) {
    const params = new URLSearchParams();
    params.append('message', message);

    const url = `${BASE_URL}/administrator/api/chat/${id}/message`;
    const token = sessionStorage.getItem('access_token');

    const options = {
        method: 'POST',
        data: params,
        url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${token}`
        }
    };
    return axios(options)
        .then(response => {
            switch (response.status) {
                case 200:
                    return response;
                default:
                    return response;
            }
        })
        .catch(error => console.log(error));
}

function getCountries() {
    const url = `${BASE_URL}/administrator/api/countries`;
    return axios.get(url,
        {
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }
    ).then(response => {
        return response.data;
    });
}

function getCities() {
    const url = `${BASE_URL}/administrator/api/cities`;
    return axios.get(url,
        {
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }
    ).then(response => {
        return response.data;
    });
}

function getMonths() {
    const url = `${BASE_URL}/administrator/api/months`;
    return axios.get(url,
        {
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }
    ).then(response => {
        return response.data;
    });
}

function getOffers() {
    const url = `${BASE_URL}/administrator/api/offers`;
    return axios.get(url,
        {
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }
    ).then(response => {
        return response.data;
    });
}

function getActivities() {
    const url = `${BASE_URL}/administrator/api/need_activities`;
    return axios.get(url,
        {
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }
    ).then(response => {
        return response.data;
    });
}

function getFilterHostel(country, city, month, offers, activities) {
    const params = new URLSearchParams();
    params.append('country', country || '0');
    params.append('city', city || '0');
    params.append('month', month || '0');
    params.append('offers', offers || '0');
    params.append('activities', activities || '0');

    const url = `${BASE_URL}/administrator/api/hostels`;

    const options = {
        method: 'GET',
        params: params,
        url,
        headers: {
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    };
    return axios(options)
        .then(response => {
            switch (response.status) {
                case 200:
                    return response.data;
                default:
                    return response;
            }
        })
        .catch(error => console.log(error));
}


export {
    getStaysDummy,
    getHostels,
    getHostel,
    getChats,
    getChat,
    postCommentChat,
    getCountries,
    getCities,
    getMonths,
    getOffers,
    getActivities,
    getFilterHostel
};