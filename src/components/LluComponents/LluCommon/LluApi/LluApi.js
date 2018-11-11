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

function postCommentChat(id,message) {
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
        .catch(error => console.log(error))
}

export {getStaysDummy, getHostels, getHostel, getChats, getChat, postCommentChat}