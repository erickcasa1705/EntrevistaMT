// Definición de la URL base para las llamadas a la API
const URL = 'https://localhost:7206/api/';


export function getAllPersonas() {
    return fetch(`${URL}personasTodos`) 
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);  // Lanza un error si la respuesta no es correcta
            }
            return response.json();  // Convierte la respuesta a formato JSON
        })
        .catch(error => {
            console.error('Error fetching data:', error);  // Muestra un error en la consola si la petición falla
            return [];  // Retorna un arreglo vacío en caso de error
        });
}



export function createPersonas(persona) {
    let data = {
        dni: persona.dni,
        nombre: persona.nombre,
        dirreccion: persona.dirreccion,
        email: persona.email
    };

    return fetch(`${URL}insertarpersona`, { // Cambia aquí a la ruta correcta
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Mejor manejo de errores
        }
        return response.text();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        return "false"; // Retorna "false" como string para que coincida con la comprobación en el frontend
    });
}

