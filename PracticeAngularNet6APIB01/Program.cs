using Microsoft.EntityFrameworkCore;
using PracticeAngularNet6APIB01.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//add dbContext for connecting database
builder.Services.AddDbContext<DatabaseContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DeafautConnection"));
});

//add CORS
/*builder.Services.AddCors(options =>
{
    options.AddPolicy("MyCORS", builder => builder.WithOrigins("*").AllowAnyHeader().AllowAnyMethod().AllowAnyMethod());
});*/

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

/*app.UseCors("MyCORS");*/
app.UseCors(c => c.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

app.UseAuthorization();

app.MapControllers();

app.Run();
