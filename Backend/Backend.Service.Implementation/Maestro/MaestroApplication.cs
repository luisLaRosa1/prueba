using Backend.Domain.Entities.Util;
using Backend.Infraestructure.UnitOfWork;
using Backend.Application.Interface.Maestro;
using static Backend.CrossCuting.Common.Constants;
using Backend.CrossCuting.DTO.Maestro;

namespace Backend.Application.Implementation.Maestro
{
    public class MaestroApplication : IMaestroApplication
    {
        private readonly IUnitOfWork _unitOfWork;

        public MaestroApplication(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<ResponseDTO> MasterDetailInformation()
        {
            var response = new ResponseDTO();
            var master = await _unitOfWork.MaestroRepository.MasterDetailInformation(Core.Master.Comprobante);
            var client = await _unitOfWork.ClienteRepository.ClientInformation();
            var product = await _unitOfWork.ProductoRepository.ProductInformation();

            var dto = new MaestroDTO
            {
                Voucher = master,
                Client = client,
                Product = product
            };

            response.Data = dto;

            return response;
        }
    }
}
