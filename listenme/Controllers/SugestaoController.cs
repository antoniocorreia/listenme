using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using listenme.DAL.Context;
using listenme.Models;
using Newtonsoft.Json;

namespace listenme.Controllers
{
  [Route("api/[controller]")]
  public class SugestaoController : Controller
  {
    private readonly BDContext _context;

    public SugestaoController(BDContext context)
    {
      _context = context;

    }

    // GET api/values
    [HttpGet("[action]")]
    public IList<Sugestao> GetSugestoes()
    {
      var Sugestoes = _context.SugestaoDb.ToList(); //.FromSql("SELECT * FROM AVS.fn_LoteNFESefaz_API()").Where(c => c.statusNFE == "NENV").ToList();        
      return Sugestoes;

    }

  }
}
