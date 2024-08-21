using EntrevistaFianl.Context;
using EntrevistaFianl.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntrevistaFianl.Operaciones
{
    public class PersonaDAO
    {
        public BbddentrevistaContext contexto = new BbddentrevistaContext();

        public List<Persona> seleccionarTodos()
        {
            var personas = contexto.Personas.ToList<Persona>();
            return personas;
        }

        public Persona seleccionarId(int id)
        {
            var persona = contexto.Personas.Where(a=>a.Id == id).FirstOrDefault();
            return persona;
        }
        public bool insertar(string dni, string nombre, string dirreccion, string email)
        {
            Persona persona = new Persona
            {
                Dni = dni,
                Nombre = nombre,
                Dirreccion = dirreccion,
                Email = email

            };
            contexto.Personas.Add(persona); 
            contexto.SaveChanges();
            return true;
        }
        public bool actualizar(int id, string dni, string nombre, string dirreccion, string email)
        {
            var persona = seleccionarId(id);
            if(persona == null)
            {
                return false;
            }
            persona.Dni = dni;
            persona.Nombre = nombre;   
            persona.Dirreccion = dirreccion;
            persona.Email = email;
            contexto.SaveChanges();
            return true;
        }
        public bool eliminar(int id)
        {
            var persona = seleccionarId(id);
            if (persona == null)
            {
                return false;
            }
            contexto.Personas.Remove(persona);
            contexto.SaveChanges() ;
            return true;
        }
    }
}
