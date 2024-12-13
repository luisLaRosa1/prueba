using Backend.Application.Interface.Maestro;
using Backend.CrossCuting.DTO.Maestro;
using Backend.Domain.Entities.Entities.Producto;
using Backend.Domain.Entities.Util;
using Backend.Infraestructure.UnitOfWork;

namespace Backend.Application.Implementation.Maestro
{
    public class MaestroApplication : IMaestroApplication
    {
        private readonly IUnitOfWork _unitOfWork;

        public MaestroApplication(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<ResponseDTO> Information()
        {
            var response = new ResponseDTO();
            var product = await _unitOfWork.ProductoRepository.Products();

            var dto = new MaestroDTO
            {
                Product = product
            };

            response.Data = dto;

            return response;
        }

        public async Task<ResponseDTO> Register(ProductoModel model)
        {
            using IUnitOfWork u = _unitOfWork;
            var response = new ResponseDTO();
            var product = await u.ProductoRepository.Register(model);

            response.Data = product.Item1;
            response.Message = product.Item2;

            u.Commit();

            return response;
        }
    }
}
