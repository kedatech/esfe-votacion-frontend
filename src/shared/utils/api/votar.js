import { URL_API } from './config';

const url = `${URL_API}/participante/voto`;

export async function votar(Body) {
  try {

    const auth = JSON.parse(localStorage.getItem('authJuezToken'));
    const Codigo = JSON.parse(localStorage.getItem('codigoJuez'));
    console.log({auth})
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`,
        'Codigo':Codigo
      },
      body: JSON.stringify(Body),
    });
    return await response.json();
  } catch (error) {
    console.error('Error al crear el elemento:', error);
    return {error}
  }
}

