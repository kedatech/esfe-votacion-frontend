import { URL_API } from './config';

const url = `${URL_API}/concurso`;

export function getAll() {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      // Manejo de errores
      console.error('Error al obtener los datos:', error);
      throw error; // Lanzar el error nuevamente para manejarlo en el componente
    });
}
