namespace Backend.CrossCuting.Common
{
    public class Constants
    {
        public struct Core
        {
            public struct Master
            {
                public const string Comprobante = "CACOMP";
            }
        }
        public struct Common
        {
            public struct DateTimeFormats
            {
                public const string DD_MM_YYYY = "dd/MM/yyyy";
                public const string DD_MM_YYYY_HH_MM_SS = "dd/MM/yyyy HH:mm:ss";
                public const string DD_MM_YYYY_HH_MM_TT_12 = "dd/MM/yyyy hh:mm tt";
                public const string DD_MM_YYYY_HH_MM_SS_TT_12 = "dd/MM/yyyy hh:mm:ss tt";
                public const string DD_MM_YYYY_HH_MM_24 = "dd/MM/yyyy HH:mm";
                public const string DD_MM_YYYY_HH_MM_SS_FFF = "yyyyMMddHHmmssFFF";
                public const string HH_MM_SS = "HH:mm:ss";
            }
        }
        public struct CodigoEstado
        {
            public const int Ok = 0;
            public const int TechnicalError = -1;
            public const int FuncionalError = 1;
        }
    }
}
