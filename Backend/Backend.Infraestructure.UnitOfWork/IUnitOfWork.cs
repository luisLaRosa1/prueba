using Backend.Infraestructure.Repository.ClienteRepository;
using Backend.Infraestructure.Repository.MaestroRepository;
using Backend.Infraestructure.Repository.ProductoRepository;
using System;

namespace Backend.Infraestructure.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IMaestroRepository MaestroRepository { get; }
        IClienteRepository ClienteRepository { get; }
        IProductoRepository ProductoRepository { get; }
        void Commit();
        void RollBack();
    }
}
