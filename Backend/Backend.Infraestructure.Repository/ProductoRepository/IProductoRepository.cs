using Backend.Domain.Entities.Entities.Producto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Infraestructure.Repository.ProductoRepository
{
    public interface IProductoRepository
    {
        Task<List<ProductoModel>> ProductInformation();
    }
}
