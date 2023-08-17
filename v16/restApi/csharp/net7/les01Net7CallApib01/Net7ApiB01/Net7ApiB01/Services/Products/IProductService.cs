using Net7ApiB01.Models;

namespace Net7ApiB01.Services.Products
{
    public interface IProductService
    {
        int CreateProduct(Product product);

        int UpdateProduct(string id,Product product);

        int DeleteProduct(string productId);   
        
        List<Product> GetAllProducts();

        Product GetProductById(string productId);
    }
}
