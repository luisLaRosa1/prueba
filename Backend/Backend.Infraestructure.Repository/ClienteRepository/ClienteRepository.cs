using Backend.Domain.Entities.Entities.Cliente;
using Backend.Infraestructure.Repository.Repository;
using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace Backend.Infraestructure.Repository.ClienteRepository
{
    public class ClienteRepository : BaseRepository, IClienteRepository
    {
        public ClienteRepository(IDbTransaction transaction) : base(transaction)
        {
        }

        public async Task<List<ClientModel>> ClientInformation()
        {
            IDbConnection connection = Connection;
            return (List<ClientModel>)await connection.QueryAsync<ClientModel>(@"[noCopiar].[usp_client]", transaction: Transaction, commandType: CommandType.StoredProcedure);
        }
    }
}
