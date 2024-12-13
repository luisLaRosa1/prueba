using Backend.Domain.Entities.Entities.Producto;
using Backend.Domain.Entities.Util;

namespace Backend.Application.Interface.Maestro
{
    public interface IMaestroApplication
    {
        Task<ResponseDTO> Information();
        Task<ResponseDTO> Register(ProductoModel model);
    }
}
