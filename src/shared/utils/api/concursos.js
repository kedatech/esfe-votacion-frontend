import { URL_API } from './config';

const url = `${URL_API}/concurso`;

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