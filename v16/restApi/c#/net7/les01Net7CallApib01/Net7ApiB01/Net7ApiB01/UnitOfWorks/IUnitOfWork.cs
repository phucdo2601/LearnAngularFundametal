using Net7ApiB01.Repositories.Products;

namespace Net7ApiB01.UnitOfWorks
{
    public interface IUnitOfWork : IDisposable
    {
        int Save();
        void Dispose();

        IProductRepository ProductRepository { get; }
    }
}
