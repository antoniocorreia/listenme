using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace listenme.Models
{

    public class Sugestao{
        public int Id { get; set; }
        [Column(TypeName = "varchar(50)")]
        public string titulo { get; set; }
        [Column(TypeName = "varchar(1000)")]
        public string descricao { get; set; }
        public int contLike {get;set;}
        public int contUnLike {get; set;}

    }


}