import { Link } from "react-router-dom";
import '../../css/HeaderStyles.css'; // Importa los estilos CSS para el Header
import { PersonaNew } from "./PersonaNew";
import { PersonaList } from "./PersonaList";

// Componente Header: Representa la barra de navegación superior de la aplicación.
export function Header() {
    return (
        <header className="bg-primary text-white p-3 shadow header-container">
            <div className="container">
                {/* Elemento <nav>: Define la barra de navegación */}
                <nav className="navbar navbar-expand-lg navbar-dark">
                    {/* Logo de la marca y enlace al inicio */}
                    <a className="navbar-brand" href="/">
                       
                        {/* Nombre del colegio que aparece junto al logo */}
                        Personas
                    </a>
                    {/* Botón de toggler para la navegación en dispositivos móviles */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Contenedor de los enlaces de navegación, que colapsa en dispositivos móviles */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {/* Enlace al Listado de alumnos */}
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active" aria-current="page">
                                    <i className="fa fa-list fa-fw mr-2"></i> Personas
                                </Link>
                            </li>
                            {/* Enlace para añadir un nuevo alumno */}
                            <li className="nav-item">
                                <Link to={'/persona'} className="nav-link">
                                    <i className="fa fa-user-plus fa-fw mr-2"></i> Añadir Persona
                                </Link>
                            </li>
                         
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
