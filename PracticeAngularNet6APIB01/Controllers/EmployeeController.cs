using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PracticeAngularNet6APIB01.Models;

namespace PracticeAngularNet6APIB01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    /*[EnableCors("MyCORS")]*/
    public class EmployeeController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public EmployeeController(DatabaseContext context)
        {
            _context = context; 
        }

        [HttpGet("getAllEmployees")]
        public async Task<IActionResult> GetAllEmployees()
        {
            var result = await _context.Employees.ToListAsync();
            return Ok(result);
        }


        [HttpGet("getEmployeeById/{id}")]
        public async Task<IActionResult> GetEmployeeById([FromRoute(Name ="id")] Guid id)
        {
            var result = await _context.Employees.FindAsync(id);
            return Ok(result);
        }


        [HttpPost("addNewEmployee")]
        public async Task<IActionResult> AddNewEmployee([FromBody] Employee empRequest)
        {
            empRequest.Id = new Guid();
            _context.Employees.Add(empRequest);
            var result = await _context.SaveChangesAsync();
            return Ok(empRequest);
        }

        [HttpPut("updateEmp/{id}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id ,[FromBody] Employee empRequest) {
            var exiestedUser = await _context.Employees.FindAsync(id);
            if (exiestedUser != null)
            {
                exiestedUser.Name = empRequest.Name;
                exiestedUser.Email = empRequest.Email;
                exiestedUser.Phone = empRequest.Phone;
                exiestedUser.Salary = empRequest.Salary;
                exiestedUser.Department = empRequest.Department;

                await _context.SaveChangesAsync();
                return Ok(exiestedUser);
            }

            return BadRequest("Employee with this id does not exist.");
        }

        [HttpDelete("deleteEmployee/{id}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute(Name ="id")] Guid id) {
            var existedEmp = await _context.Employees.FindAsync(id);
            if (existedEmp != null)
            {
                _context.Employees.Remove(existedEmp);
                await _context.SaveChangesAsync();
                return await Task.FromResult(StatusCode(StatusCodes.Status200OK, new
                {
                    Message = "Delete successfully!"
                }));
            }
            return NotFound("Do not have the employee with this id!");
        }
        
    }
}
