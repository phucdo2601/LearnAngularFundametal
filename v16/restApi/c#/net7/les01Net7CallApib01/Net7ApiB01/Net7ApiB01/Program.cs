using Microsoft.EntityFrameworkCore;
using Net7ApiB01.Context;
using Net7ApiB01.UnitOfWorks;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//add connection string on dbContext
builder.Services.AddDbContext<DatabaseContext>(
     options =>
     {
         options.UseSqlServer(builder.Configuration.GetConnectionString("DbConnecion"));
     }
    );

//Configure Unit of work for using repository
builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
