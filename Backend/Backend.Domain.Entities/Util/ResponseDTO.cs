using System.Dynamic;
using System;
using Backend.CrossCuting.Common;

namespace Backend.Domain.Entities.Util
{
    public class ResponseDTO
    {
        public ResponseDTO()
        {
            Status = Constants.CodigoEstado.Ok;
            this.TransactionId = DateTime.Now.ToString(Constants.Common.DateTimeFormats.DD_MM_YYYY_HH_MM_SS_FFF);
            Data = new ExpandoObject();
        }
        public string TransactionId { get; set; }
        public int Status { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
    }

    public class ResponseDTO<T>
    {
        public ResponseDTO()
        {
            this.Status = Constants.CodigoEstado.Ok;
            this.TransactionId = DateTime.Now.ToString(Constants.Common.DateTimeFormats.DD_MM_YYYY_HH_MM_SS_FFF);
        }

        public string TransactionId { get; set; }
        public int Status { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }

    }
}
