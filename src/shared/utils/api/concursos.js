import { URL_API } from './config';

const url = `${URL_API}/concurso`;

export async function createItem(data) {
  console.log(data)
  try {
    const auth = JSON.parse(localStorage.getItem('authResult'));
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error('Error al crear el elemento:', error);
    throw error;
  }
}

export async function editItem(data) {
  try {
    const auth = JSON.parse(localStorage.getItem('authResult'));
    const response = await fetch(`${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
}

export async function getAll() {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    // Manejo de errores
    console.error('Error al obtener los datos:', error);
    throw error; // Lanzar el error nuevamente para manejarlo en el componente
  }
}


export async function getById(Id) {
  try {
    const response = await fetch(`${url}/${Id}/categoria`);
    return await response.json();
  } catch (error) {
    // Manejo de errores
    console.error('Error al obtener los datos:', error);
    throw error; // Lanzar el error nuevamente para manejarlo en el componente
  }
}


export async function deleteItem(Id) {
  try {
    const auth = JSON.parse(localStorage.getItem('authResult'));
    const response = await fetch(`${url}/${Id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`,
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
}

