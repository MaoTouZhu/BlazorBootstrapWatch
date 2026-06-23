namespace BlazorBootstrapWatch.Services;

/// <summary>
/// 计数器服务 — 用于演示三种 DI 生命周期 (Singleton / Scoped / Transient)
/// </summary>
public class CounterService : IDisposable
{
    private static int _globalInstanceCount;

    public int InstanceId { get; } = Interlocked.Increment(ref _globalInstanceCount);
    public int Count { get; private set; }
    public DateTime CreatedAt { get; } = DateTime.Now;

    public void Increment() => Count++;
    public void Reset() => Count = 0;

    public void Dispose()
    {
        Console.WriteLine($"[CounterService #{InstanceId}] 已释放 (Disposed), 最终计数: {Count}");
    }
}
