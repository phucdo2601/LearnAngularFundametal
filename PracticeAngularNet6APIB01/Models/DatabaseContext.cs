using Microsoft.EntityFrameworkCore;

namespace PracticeAngularNet6APIB01.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

        #region set dbSet for import or export data on db
        public DbSet<Employee> Employees { get; set; }

        #endregion
    }
}
