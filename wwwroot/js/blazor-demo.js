// Blazor 演示用 JS 模块 (blazor-demo.js)
// 用于 JS 互操作页面展示

export function showAlert(message) {
    alert('[Blazor 调用 JS] ' + message);
}

export function getLocalStorage(key) {
    return localStorage.getItem(key) || '(空)';
}

export function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
    return `已保存: ${key} = ${value}`;
}

export function removeLocalStorage(key) {
    localStorage.removeItem(key);
    return `已删除: ${key}`;
}

export function getBrowserInfo() {
    return JSON.stringify({
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        cookiesEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
    });
}

export function getWindowSize() {
    return JSON.stringify({
        width: window.innerWidth,
        height: window.innerHeight,
    });
}

export function focusElement(element) {
    if (element) element.focus();
}

export function copyToClipboard(text) {
    return navigator.clipboard.writeText(text).then(() => '已复制到剪贴板');
}
