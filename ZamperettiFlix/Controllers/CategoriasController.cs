using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ZamperettiFlix.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoriasController : ControllerBase
    {
        [HttpGet]
        public RootCategorias Get()
        {
            RootCategorias Categorias;
            using (StreamReader r = new StreamReader("../ZamperettiFlix/ClientApp/src/data/dados_iniciais.json"))
            {
                string json = r.ReadToEnd();
                Categorias = JsonSerializer.Deserialize<RootCategorias>(json);                
            }            
            return Categorias;
        }
    }
}
