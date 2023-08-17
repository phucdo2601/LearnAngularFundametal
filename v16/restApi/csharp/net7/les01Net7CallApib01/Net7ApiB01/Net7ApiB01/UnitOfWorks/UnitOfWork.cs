using Net7ApiB01.Context;
using Net7ApiB01.Repositories.Products;

namespace Net7ApiB01.UnitOfWorks
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DatabaseContext _dbContext;

        public UnitOfWork(DatabaseContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public IProductRepository ProductRepository => new ProductRepository(this._dbContext);

        public void Dispose()
        {
            _dbContext.Dispose();
        }

        public int Save()
        {
            return _dbContext.SaveChanges();
        }
    }
}
