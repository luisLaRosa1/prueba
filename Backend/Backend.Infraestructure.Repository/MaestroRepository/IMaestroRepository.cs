using Backend.Domain.Entities.Entities.Maestro;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Infraestructure.Repository.MaestroRepository
{
    public interface IMaestroRepository
    {
        Task<List<MaestroModel>> MasterDetailInformation(string code);
    }
}
