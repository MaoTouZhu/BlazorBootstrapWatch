// 全局快捷键 — Ctrl+H 回到首页
// 在 Blazor enhanced navigation 下通过 'enhancedload' 事件确保持久生效
function registerShortcuts() {
    document.addEventListener('keydown', function (e) {
        // Ctrl+H 或 Cmd+H (Mac)
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'h') {
            // 仅在用户未聚焦在输入框/文本域时触发
            var tag = document.activeElement?.tagName?.toLowerCase();
            if (tag === 'input' || tag === 'textarea' || tag === 'select' || document.activeElement?.isContentEditable) {
                return;
            }
            e.preventDefault();
            window.location.href = '/';
        }
    });
}

// 首次加载
registerShortcuts();

// Blazor 增强导航后重新注册（增强导航不会完全重载页面）
document.addEventListener('enhancedload', registerShortcuts);
