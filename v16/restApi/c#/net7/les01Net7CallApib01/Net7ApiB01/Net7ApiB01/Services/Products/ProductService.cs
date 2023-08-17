using Net7ApiB01.Context;
using Net7ApiB01.Models;
using Net7ApiB01.UnitOfWorks;

namespace Net7ApiB01.Services.Products
{
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly DatabaseContext _context;

        public ProductService(IUnitOfWork unitOfWork, DatabaseContext context)
        {
            _unitOfWork = unitOfWork;
            _context = context;
        }

        public int CreateProduct(Product product)
        {
            throw new NotImplementedException();
        }

        public int DeleteProduct(string productId)
        {
            using(var transaction = _context.Database.BeginTransaction())
            {
                try
                {
                    int delete = -1;
                    var productIdGuid = new Guid(productId);
                    var productById = _unitOfWork.ProductRepository.GetById(productIdGuid);
                    if (productById != null)
                    {
                        _unitOfWork.ProductRepository.Remove(productById);
                        delete = _unitOfWork.Save();
                        transaction.Commit();
                    }
                    return delete;
                }
                catch (Exception)
                {

                    transaction.Rollback();
                    throw;
                }
                /*finally
                {
                    _unitOfWork.Dispose();
                }*/
            }
        }

        public List<Product> GetAllProducts()
        {
            try
            {
                var result = _unitOfWork.ProductRepository.GetAll().ToList();
                return result;
            }
            catch (Exception)
            {

                throw;
            }
            finally { _unitOfWork.Dispose(); }  
        }

        public Product GetProductById(string productId)
        {
            try
            {
                var productIdGuid = new Guid(productId);
                var product = _unitOfWork.ProductRepository.GetById(productIdGuid);

                return product;
            }
            catch (Exception)
            {

                throw;
            }
            finally { _unitOfWork.Dispose(); }
        }

        public int UpdateProduct(string id, Product product)
        {
            using (var transaction = _context.Database.BeginTransaction())
            {
                try
                {
                    int update = -1;
                    var productIdGuid = new Guid(id);
                    if (productIdGuid == product.Id)
                    {
                        var productById = _unitOfWork.ProductRepository.GetById(productIdGuid);
                        if (productById != null)
                        {
                            productById.Name = product.Name;
                            productById.Color = product.Color;
                            productById.Type = product.Type;
                            productById.Price = product.Price;
                            update = _unitOfWork.Save();
                            transaction.Commit();
                        }
                    }
                    
                   
                    return update;
                }
                catch (Exception)
                {

                    transaction.Rollback();
                    throw;
                }
                finally
                {
                    _unitOfWork.Dispose();
                }
            }
        }
    }
}
