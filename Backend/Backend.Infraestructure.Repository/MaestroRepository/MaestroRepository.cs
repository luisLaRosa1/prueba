using Backend.Domain.Entities.Entities.Maestro;
using Backend.Infraestructure.Repository.Repository;
using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace Backend.Infraestructure.Repository.MaestroRepository
{
    public class MaestroRepository : BaseRepository, IMaestroRepository
    {
        public MaestroRepository(IDbTransaction transaction) : base(transaction)
        {
        }

        public async Task<List<MaestroModel>> MasterDetailInformation(string code)
        {
            IDbConnection connection = Connection;
            DynamicParameters parameters = new();
            parameters.Add("@code", code, DbType.String);
            return (List<MaestroModel>)await connection.QueryAsync<MaestroModel>(@"[noCopiar].[usp_maestro_detail_by_code]", parameters, transaction: Transaction, commandType: CommandType.StoredProcedure);
        }
    }
}
