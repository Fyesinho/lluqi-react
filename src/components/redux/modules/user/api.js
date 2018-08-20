import axios from 'axios';

export function registerUser(username, email, password, genero, telefono, fechaNacimiento) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('email', email);
    params.append('password', password);
    params.append('genero', genero);
    params.append('telefono', telefono);
    params.append('fechaNacimiento', fechaNacimiento);

    const url = 'http://api.lluqi.com/auth/local/register';
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
                    return response.data;
                default:
                    return response;
            }
        })
        .catch(error => console.log(error))
}