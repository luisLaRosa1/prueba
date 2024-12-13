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

        public async Task<List<ProductoModel>> Products()
        {
            IDbConnection connection = Connection;
            return (List<ProductoModel>)await connection.QueryAsync<ProductoModel>(@"[sp_list_product]", transaction: Transaction, commandType: CommandType.StoredProcedure);
        }

        public async Task<(bool, string)> Register(ProductoModel register)
        {
            IDbConnection connection = Connection;
            {
                var parameters = new DynamicParameters();
                parameters.Add("@Name", register.Name, DbType.String, ParameterDirection.Input);
                parameters.Add("@Description", register.Description, DbType.String, ParameterDirection.Input);
                parameters.Add("@Price", register.Price, DbType.Decimal, ParameterDirection.Input);
                parameters.Add("@Success", dbType: DbType.Int32, direction: ParameterDirection.Output);
                parameters.Add("@Message", dbType: DbType.String, direction: ParameterDirection.Output, size: 8000);
                await connection.ExecuteAsync(@"[sp_insert_product]", parameters, transaction: Transaction, commandType: CommandType.StoredProcedure);

                return (parameters.Get<int>("@Success") == 1, parameters.Get<string>("@Message"));
            }
        }
    }
}
