import axios from 'axios';

const ENDPOINT = 'http://172.16.12.24:8080/api/auth/signin';

export default async function login({ username, password }) {
    try {
        const response = await axios.post(ENDPOINT, {
            usernameOrEmail: username,
            password: password,
        });

        // La solicitud fue exitosa, obtenemos el accessToken en lugar del token
        const { accessToken } = response.data;
        return accessToken;
    } catch (error) {
        if (error.response) {
            // Si la respuesta del servidor tiene información, la mostramos
            console.error('Respuesta del servidor:', error.response.data);
        } else if (error.request) {
            // Si la solicitud fue hecha pero no hubo respuesta
            console.error('No hubo respuesta del servidor:', error.request);
        } else {
            // Si ocurrió un error en el proceso de solicitud
            console.error('Error al realizar la solicitud:', error.message);
        }

        throw new Error('Algo salió mal, intente de nuevo');
    }
}


