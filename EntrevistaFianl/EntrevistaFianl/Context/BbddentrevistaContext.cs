using System;
using System.Collections.Generic;
using EntrevistaFianl.Models;
using Microsoft.EntityFrameworkCore;

namespace EntrevistaFianl.Context;

public partial class BbddentrevistaContext : DbContext
{
    public BbddentrevistaContext()
    {
    }

    public BbddentrevistaContext(DbContextOptions<BbddentrevistaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Persona> Personas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=UIOTIC066\\SQLEXPRESS;Database=BBDDEntrevista;Trust Server Certificate=true;User Id=proyecto;Password=Sanvicente1705;MultipleActiveResultSets=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Persona>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__PERSONA__3213E83F1E734F7A");

            entity.ToTable("PERSONA");

            entity.HasIndex(e => e.Dni, "UQ__PERSONA__D87608A7C38CBFCF").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Dirreccion)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("dirreccion");
            entity.Property(e => e.Dni)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("dni");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Nombre)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
