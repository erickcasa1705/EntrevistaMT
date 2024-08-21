import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPersonas} from '../../services/data';
import '../../css/PersonasStyles.css'; // Importa los estilos CSS específicos para este componente


export function PersonaList() {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        const fetchPersonas = async () => {
            try {
                const data = await getAllPersonas();
                setPersonas(data);
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        };
        fetchPersonas();
    }, []);

   

    return (
        <>
            <h2 className="table-title">Listado de Personas</h2>
            
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personas.map((personas, index) => (
                            <tr key={index}>
                                <td>{personas.id}</td>
                                <td>{personas.dni}</td>
                                <td>{personas.nombre}</td>
                                <td>{personas.dirreccion}</td>
                                <td>{personas.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
