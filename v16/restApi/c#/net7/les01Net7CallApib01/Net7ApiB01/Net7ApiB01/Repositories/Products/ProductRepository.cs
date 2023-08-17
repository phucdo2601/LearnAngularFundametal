using Net7ApiB01.Context;
using Net7ApiB01.Models;
using Net7ApiB01.Repositories.Generic;

namespace Net7ApiB01.Repositories.Products
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
        public ProductRepository(DatabaseContext dataContext) : base(dataContext)
        {
        }
    }
}
