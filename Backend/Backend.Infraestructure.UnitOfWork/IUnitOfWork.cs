using Backend.Infraestructure.Repository.ProductoRepository;
using System;

namespace Backend.Infraestructure.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IProductoRepository ProductoRepository { get; }
        void Commit();
        void RollBack();
    }
}
