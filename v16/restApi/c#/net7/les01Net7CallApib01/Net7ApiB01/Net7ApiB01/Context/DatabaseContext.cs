using Microsoft.EntityFrameworkCore;
using Net7ApiB01.Models;

namespace Net7ApiB01.Context
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
            
        }

        #region the region for entity
        public DbSet<Product> Products { get; set; }
        #endregion
    }
}
