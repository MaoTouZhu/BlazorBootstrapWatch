// 浮动弹窗拖动 — 使用 document 级事件监听，确保拖动不中断
let _dotNetRef = null;
let _startX = 0, _startY = 0, _startClientX = 0, _startClientY = 0;

function onMouseMove(e) {
    if (!_dotNetRef) return;
    e.preventDefault();
    const newX = _startX + (e.clientX - _startClientX);
    const newY = _startY + (e.clientY - _startClientY);
    _dotNetRef.invokeMethodAsync('OnDragUpdate', newX, newY);
}

function onMouseUp(e) {
    if (!_dotNetRef) return;
    cleanup();
    _dotNetRef.invokeMethodAsync('OnDragEnd');
}

function cleanup() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.body.style.userSelect = '';
    _dotNetRef = null;
}

export function beginDrag(dotNetRef, popupX, popupY, clientX, clientY) {
    cleanup(); // 确保之前的状态被清除
    _dotNetRef = dotNetRef;
    _startX = popupX;
    _startY = popupY;
    _startClientX = clientX;
    _startClientY = clientY;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.body.style.userSelect = 'none'; // 拖动时禁止选中文字
}
