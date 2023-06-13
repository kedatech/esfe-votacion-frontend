import { URL_API } from './config';

const url = `${URL_API}/estadistica/carrera`;

export async function getCarrerasVotes() {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      // Manejo de errores
      console.error('Error al obtener los datos:', error);
      throw error; // Lanzar el error nuevamente para manejarlo en el componente
    }
  }

