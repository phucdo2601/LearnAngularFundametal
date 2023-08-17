using Microsoft.EntityFrameworkCore;
using Net7ApiB01.Context;
using System.Linq.Expressions;

namespace Net7ApiB01.Repositories.Generic
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly DatabaseContext _dataContext;

        public GenericRepository(DatabaseContext dataContext)
        {
            this._dataContext = dataContext;
        }

        public void Add(T entity)
        {
            _dataContext.Set<T>().Add(entity);
        }

        public void AddRange(IEnumerable<T> entities)
        {
            _dataContext.Set<T>().AddRange(entities);
        }

        public IEnumerable<T> Find(Expression<Func<T, bool>> predicate)
        {
            return _dataContext.Set<T>().Where(predicate);
        }

        public IEnumerable<T> GetAll()
        {
            return _dataContext.Set<T>().ToList();
        }

        public T GetById(Guid id)
        {
            return _dataContext.Set<T>().Find(id);
        }

        public void Remove(T entity)
        {
            _dataContext.Set<T>().Remove(entity);
        }

        public void RemoveRange(IEnumerable<T> entities)
        {
            _dataContext.Set<T>().RemoveRange(entities);
        }
    }
}
