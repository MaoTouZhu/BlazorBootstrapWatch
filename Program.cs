using BlazorBootstrapWatch.Components;
using BlazorBootstrapWatch.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

// DI 演示服务 — 三种生命周期
builder.Services.AddSingleton<CounterService>();     // 整个应用共享一个实例
builder.Services.AddScoped<CounterService>();        // 每个 SignalR 回路一个实例
builder.Services.AddTransient<CounterService>();     // 每次注入一个新实例

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseStatusCodePagesWithReExecute("/not-found", createScopeForStatusCodePages: true);
app.UseHttpsRedirection();

app.UseAntiforgery();

app.MapStaticAssets();
app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
