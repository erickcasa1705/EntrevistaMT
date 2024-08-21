using System;
using System.Collections.Generic;

namespace EntrevistaFianl.Models;

public partial class Persona
{
    public int Id { get; set; }

    public string? Dni { get; set; }

    public string Nombre { get; set; } = null!;

    public string Dirreccion { get; set; } = null!;

    public string Email { get; set; } = null!;
}
