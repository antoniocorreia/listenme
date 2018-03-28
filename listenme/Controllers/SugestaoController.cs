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
      var Sugestoes = _context.SugestaoDb.ToList();
      return Sugestoes;

    }

    [HttpPost("[action]")]
    public IActionResult Create([FromBody] Sugestao item)
    {
      if (item == null)
      {
        return BadRequest();
      }

      _context.SugestaoDb.Add(item);
      _context.SaveChanges();

      return CreatedAtRoute("GetTodo", new { id = item.Id }, item);
    }

    [HttpGet("{id}", Name = "GetTodo")]
    public IActionResult GetById(long id)
    {
      var item = _context.SugestaoDb.FirstOrDefault(t => t.Id == id);
      if (item == null)
      {
        return NotFound();
      }
      return new ObjectResult(item);
    }

  }
}
