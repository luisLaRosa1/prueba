using System.Runtime.Serialization;

namespace Backend.CrossCuting.Common
{
    [Serializable()]
    public class TechnicalException : Exception, ISerializable
    {
        public string TransactionId { get; }
        public int ErrorCode { get; }
        public dynamic? Data { get; set; }
        public TechnicalException(int status, string message) : base(message)
        {
            this.ErrorCode = status;
            this.TransactionId = DateTime.Now.ToString(Constants.Common.DateTimeFormats.DD_MM_YYYY_HH_MM_SS_FFF);
        }
        public TechnicalException(int status, string message, dynamic data) : base(message)
        {
            this.ErrorCode = status;
            this.TransactionId = DateTime.Now.ToString(Constants.Common.DateTimeFormats.DD_MM_YYYY_HH_MM_SS_FFF);
            this.Data = data;
        }
        public TechnicalException(string message) : base(message)
        {
            this.TransactionId = DateTime.Now.ToString(Constants.Common.DateTimeFormats.DD_MM_YYYY_HH_MM_SS_FFF);
        }
    }
}
