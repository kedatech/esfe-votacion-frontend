import { URL_API } from './config';

const url = `${URL_API}/auth`;

export async function authAdmin(body) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data
  } catch (error) {
    // Manejar el error de la petición
    console.error(error);
  }
}
