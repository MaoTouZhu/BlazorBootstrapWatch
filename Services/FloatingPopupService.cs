namespace BlazorBootstrapWatch.Services;

/// <summary>
/// 浮动弹窗服务（Singleton）— 跨页面持久化弹窗状态。
/// 页面导航不会销毁 Singleton 服务，弹窗在切换页面后仍然存在。
/// </summary>
public class FloatingPopupService
{
    public bool Visible { get; private set; }
    public string Title { get; private set; } = "";
    public string Message { get; private set; } = "";
    public double X { get; set; } = 100;
    public double Y { get; set; } = 100;

    public event Action? OnChanged;

    public void Show(string title, string message)
    {
        Title = title;
        Message = message;
        Visible = true;
        Notify();
    }

    public void Close()
    {
        Visible = false;
        Notify();
    }

    public void Notify() => OnChanged?.Invoke();
}
