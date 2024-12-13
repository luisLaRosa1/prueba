using Backend.Domain.Entities.Util;

namespace Backend.Application.Interface.Maestro
{
    public interface IMaestroApplication
    {
        Task<ResponseDTO> MasterDetailInformation();
    }
}
