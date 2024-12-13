using Backend.Domain.Entities.Entities.Producto;
using Backend.Infraestructure.Repository.Repository;
using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace Backend.Infraestructure.Repository.ProductoRepository
{
    public class ProductoRepository : BaseRepository, IProductoRepository
    {
        public ProductoRepository(IDbTransaction transaction) : base(transaction)
        {
        }

        public async Task<List<ProductoModel>> ProductInformation()
        {
            IDbConnection connection = Connection;
            return (List<ProductoModel>)await connection.QueryAsync<ProductoModel>(@"[noCopiar].[usp_product]", transaction: Transaction, commandType: CommandType.StoredProcedure);
        }
    }
}
