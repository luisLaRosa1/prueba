using Backend.CrossCuting.Common;
using Backend.Domain.Entities.Util;
using Backend.Application.Interface.Maestro;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Backend.RestServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaestroController : ControllerBase
    {
        private readonly IMaestroApplication _maestroApplication;
        public MaestroController(IMaestroApplication maestroApplication)
        {
            _maestroApplication = maestroApplication;
        }

        [HttpGet]
        public async Task<IActionResult> Master()
        {
            ResponseDTO response;
            try
            {
                var data = await _maestroApplication.MasterDetailInformation();
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
    }
}
