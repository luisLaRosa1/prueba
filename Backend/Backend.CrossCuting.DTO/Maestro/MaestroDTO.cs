using Backend.Domain.Entities.Entities.Cliente;
using Backend.Domain.Entities.Entities.Maestro;
using Backend.Domain.Entities.Entities.Producto;

namespace Backend.CrossCuting.DTO.Maestro
{
    public class MaestroDTO
    {
        public List<MaestroModel> Voucher { get; set; }
        public List<ClientModel> Client { get; set; }
        public List<ProductoModel> Product { get; set; }
    }
}
