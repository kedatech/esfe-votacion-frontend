import { URL_API } from './config';

const url = `${URL_API}/auth/verify`;

export async function authAdmin( token) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Agrega tu token de autorización aquí
      }
    });

    const data = await response.json();
    return data;
  } catch (error) {
    // Manejar el error de la petición
    console.error(error);
  }
}
