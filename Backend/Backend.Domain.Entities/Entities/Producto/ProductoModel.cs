using Backend.Domain.Entities.Util;

namespace Backend.Domain.Entities.Entities.Producto
{
    public class ProductoModel : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
    }
}
