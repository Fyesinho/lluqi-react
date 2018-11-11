import axios from 'axios';

export function registerUser(username, email, password, genero, telefono, fechaNacimiento) {
    const params = new URLSearchParams();
    params.append('name', username);
    params.append('email', email);
    params.append('password', password);
    params.append('gender_id', genero);
    params.append('phone', telefono);
    params.append('birthday', fechaNacimiento);

    const url = 'https://lluqi.com/administrator/api/register';
    const options = {
        method: 'POST',
        data: params,
        url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    return axios(options)
        .then(response => {
            console.log(response);
            switch (response.status) {
                case 200:
                    loginUser(email, password).then( response =>  {
                        sessionStorage.setItem('user', JSON.stringify(response.user));
                        sessionStorage.setItem('access_token', JSON.stringify(response.access_token));
                        sessionStorage.setItem('type', 'traveler');
                        window.location.reload();
                    });
                    break;
                default:
                    return response;
            }
        })
        .catch(error => console.log(error))
}

export function loginUser(email, password) {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);

    const url = 'https://lluqi.com/administrator/api/login';
    const options = {
        method: 'POST',
        data: params,
        url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    return axios(options)
        .then(response => {
            console.log(response);
            switch (response.status) {
                case 200:
                    sessionStorage.setItem('user', JSON.stringify(response.data.user));
                    sessionStorage.setItem('access_token', response.data.access_token);
                    sessionStorage.setItem('type', 'traveler');
                    window.location.reload();
                    break;
                default:
                    return response;
            }
        })
        .catch(error => console.log(error))
}