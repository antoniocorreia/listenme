using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using listenme.Models;


namespace listenme.DAL.Context
{
    class BDContext : DbContext
    {

        public DbSet<Sugestao> SugestaoDb { get; set; }

        public BDContext(DbContextOptions<BDContext> options) : base(options)   
        {
            
        }       

            protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Sugestao>().ToTable("Sugestao");
        }
    }
}
