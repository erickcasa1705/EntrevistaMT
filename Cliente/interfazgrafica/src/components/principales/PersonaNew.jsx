import React, { useState } from "react";
import { Header } from "../principales/Header";
import * as API from '../../services/data'; // Importa las funciones de la API necesarias para manejar los datos de estudiantes
import '../../css/PersonasNewStyles.css'; // Importa los estilos CSS específicos para este componente


export function PersonaNew() {
    // Estado inicial para almacenar los datos del nuevo estudiante
    const [persona, setPersonas] = useState({
        dni: '',
        nombre: '',
        dirreccion: '',
        email: '',
    });

    // Función handleSubmit: Maneja el envío del formulario para crear un nuevo estudiante
    function handleSubmit(e) {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario (recarga de página)
        // Llama a la API para crear un nuevo estudiante con los datos del estado
        API.createPersonas(persona).then(result => {
            if (result === "true") {
                alert("Persona insertado con éxito"); // Notifica al usuario que el estudiante fue añadido exitosamente
                resetForm(); // Resetea el formulario después de la inserción exitosa
            } else {
                alert("Error al insertar la persona"); // Notifica al usuario si hubo un error al insertar
                resetForm(); // Resetea el formulario incluso si hubo un error
            }
        });
    }

    // Función resetForm: Resetea los valores del formulario a los valores iniciales
    function resetForm() {
        setPersonas({
            dni: '',
            nombre: '',
            dirreccion: '',
            email: '',
        });
    }

    return (
        <>
            {/* Incluye el componente Header para la navegación */}
            <Header />
            {/* Título de la página */}
            <h2 className="table-title">Listado de Personas</h2>
            {/* Formulario para añadir un nuevo estudiante */}
            <form id='formulario' onSubmit={handleSubmit}>
                {/* Campo para el DNI del estudiante */}
                Dni<input type='text' id='dni' required value={persona.dni} onChange={event => setPersonas({ ...persona, dni: event.target.value })} />
                {/* Campo para el nombre del estudiante */}
                Nombre<input type='text' id='nombre' required value={persona.nombre} onChange={event => setPersonas({ ...persona, nombre: event.target.value })} />
                {/* Campo para la dirección del estudiante */}
                Direccion<input type='text' id='direccion' required value={persona.dirreccion} onChange={event => setPersonas({ ...persona, dirreccion: event.target.value })} />
                {/* Campo para la edad del estudiante */}
                {/* Campo para el email del estudiante */}
                Email<input type='text' id='email' required value={persona.email} onChange={event => setPersonas({ ...persona, email: event.target.value })} />
                {/* Botón para enviar el formulario */}
                <input type="submit" value='Nuevo' />
            </form>
        </>
    );
}
