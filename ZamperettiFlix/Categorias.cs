using System;
using System.Collections.Generic;

namespace ZamperettiFlix
{

    public class Categorias
    {
        public string titulo { get; set; }
        public string cor { get; set; }
        public List<Video> videos { get; set; }
    }
    public class Video
    {
        public string titulo { get; set; }
        public string url { get; set; }
    }
    public class RootCategorias
    {
        public List<Categorias> categorias { get; set; }
    }
}
