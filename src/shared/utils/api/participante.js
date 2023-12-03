import { URL_API } from './config';

const url = `${URL_API}/participante`;

export async function getByCodigo(codigoParticipante, codigoJuez) {
  try {
    const response = await fetch(`${url}/${codigoParticipante}/${codigoJuez}`);

    const data = await response.json();
    return data
  } catch (error) {
    // Manejar el error de la petición
    console.error(error);
  }
}
