using Backend.CrossCuting.Common;
using Backend.Domain.Entities.Util;
using Backend.Application.Interface.Maestro;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Backend.Domain.Entities.Entities.Producto;

namespace Backend.RestServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IMaestroApplication _maestroApplication;
        public ProductController(IMaestroApplication maestroApplication)
        {
            _maestroApplication = maestroApplication;
        }

        [HttpGet]
        public async Task<IActionResult> Products()
        {
            ResponseDTO response;
            try
            {
                var data = await _maestroApplication.Information();
                response = new ResponseDTO { Data = data.Data, Status = Constants.CodigoEstado.Ok };
            }
            catch (FunctionalException ex)
            {
                response = new ResponseDTO { Status = ex.FuntionalCode, Message = ex.Message, Data = ex.Data, TransactionId = ex.TransactionId };
            }
            catch (TechnicalException ex)
            {
                response = new ResponseDTO { Status = ex.ErrorCode, Message = ex.Message, Data = ex.Data, TransactionId = ex.TransactionId };
            }
            catch (Exception ex)
            {
                response = new ResponseDTO { Message = ex.Message, Status = Constants.CodigoEstado.TechnicalError, Data = null };
            }
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> Register(ProductoModel product)
        {
            ResponseDTO response;
            try
            {
                var data = await _maestroApplication.Register(product);
                response = new ResponseDTO { Data = data.Data, Status = Constants.CodigoEstado.Ok, Message = data.Message };
            }
            catch (FunctionalException ex)
            {
                response = new ResponseDTO { Status = ex.FuntionalCode, Message = ex.Message, Data = ex.Data, TransactionId = ex.TransactionId };
            }
            catch (TechnicalException ex)
            {
                response = new ResponseDTO { Status = ex.ErrorCode, Message = ex.Message, Data = ex.Data, TransactionId = ex.TransactionId };
            }
            catch (Exception ex)
            {
                response = new ResponseDTO { Message = ex.Message, Status = Constants.CodigoEstado.TechnicalError, Data = null };
            }
            return Ok(response);
        }
    }
}
