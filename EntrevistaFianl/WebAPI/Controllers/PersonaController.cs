using EntrevistaFianl.Models;
using EntrevistaFianl.Operaciones;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private PersonaDAO personaDAO = new PersonaDAO();

        [HttpGet("personasTodos")]
        public IActionResult GetTodosLasPersonas()
        {
            var result = personaDAO.seleccionarTodos();
            return Ok(result);
        }

        

        [HttpPost("insertarpersona")]
        public IActionResult InsertarPersona([FromBody] Persona persona) 
        {
            var result =personaDAO.insertar(persona.Dni,persona.Nombre,persona.Dirreccion,persona.Email);
                return Ok(result);
        }

    }
}
