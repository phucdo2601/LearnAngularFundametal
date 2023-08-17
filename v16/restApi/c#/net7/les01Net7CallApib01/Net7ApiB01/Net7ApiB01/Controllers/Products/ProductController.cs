using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Net7ApiB01.Context;
using Net7ApiB01.DTOs;
using Net7ApiB01.Models;
using Net7ApiB01.Services.Products;
using Net7ApiB01.UnitOfWorks;

namespace Net7ApiB01.Controllers.Products
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IProductService _productService;
        private readonly DatabaseContext _context;

        public ProductController(IUnitOfWork unitOfWork, DatabaseContext context)
        {
            this._unitOfWork = unitOfWork;
            _context = context;
            this._productService = new ProductService(unitOfWork, context);
        }

        [HttpGet("getAllProducts")]
        public async Task<IActionResult> GetAllProducts()
        {
            var listProducts = _productService.GetAllProducts();

            return await Task.FromResult(StatusCode(StatusCodes.Status200OK, listProducts));
        }

        [HttpGet("getProductById/{id}")]
        public async Task<IActionResult> GetProductById([FromRoute(Name = "id")] string productId)
        {
            var product = _productService.GetProductById(productId);
            return await Task.FromResult(StatusCode(StatusCodes.Status200OK, product));
        }

        [HttpPost("addNewProduct")]
        public async Task<IActionResult> AddNewProduct([FromBody] ProductDto model)
        {
            var productId = new Guid();
            var product = new Product()
            {
                Id = productId,
                Color = model.Color,
                Name = model.Name,
                Price = model.Price,
                Type = model.Type
            };

            _unitOfWork.ProductRepository.Add(product);
            int res = _unitOfWork.Save();

            return res > 0 ? await Task.FromResult(StatusCode(StatusCodes.Status200OK, product)) : await Task.FromResult(StatusCode(StatusCodes.Status400BadRequest, new
            {
                Message = "Create Category is not successfully"
            }));
        }

        [HttpPut("updateProduct/{id}")]
        public async Task<IActionResult> UpdateProduct([FromRoute(Name ="id")] string id, [FromBody] Product model)
        {
            var res = _productService.UpdateProduct(id, model);
            return res > 0 ? await Task.FromResult(StatusCode(StatusCodes.Status200OK, model))
                : await Task.FromResult(StatusCode(StatusCodes.Status404NotFound, new { StatusCode = StatusCodes.Status400BadRequest, Message = "Update Product is not successfully" }));
        }

        [HttpDelete("deleteProduct/{id}")]
        public async Task<IActionResult> DeleteProductById([FromRoute(Name = "id")] string id)
        {
            var res = _productService.DeleteProduct(id);
            var listProducts = _productService.GetAllProducts();
            return res > 0 ? await Task.FromResult(StatusCode(StatusCodes.Status200OK, new
            {
                Message = "Delete Product successfully!",
                Data = listProducts
            })) :
                await Task.FromResult(StatusCode(StatusCodes.Status404NotFound, new { StatusCode = StatusCodes.Status400BadRequest, Message = "Delete Product is not successfully" }));
        }
    }
}
