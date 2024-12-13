using Backend.Domain.Entities.Entities.Cliente;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Infraestructure.Repository.ClienteRepository
{
    public interface IClienteRepository
    {
        Task<List<ClientModel>> ClientInformation();
    }
}
