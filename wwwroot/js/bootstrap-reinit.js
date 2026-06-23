// Reinitialize Bootstrap components after Blazor enhanced navigation
document.addEventListener('enhancedload', function () {
    // Tooltips
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (el) {
        return bootstrap.Tooltip.getOrCreateInstance(el);
    });
    // Popovers
    [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (el) {
        return bootstrap.Popover.getOrCreateInstance(el);
    });
    // Toasts
    [].slice.call(document.querySelectorAll('.toast')).map(function (el) {
        return bootstrap.Toast.getOrCreateInstance(el);
    });
});

// Auto-show demo toasts on page load
document.addEventListener('DOMContentLoaded', function () {
    [].slice.call(document.querySelectorAll('.toast[data-bs-autohide="false"]')).forEach(function (el) {
        var toast = bootstrap.Toast.getOrCreateInstance(el);
        toast.show();
    });
});
document.addEventListener('enhancedload', function () {
    [].slice.call(document.querySelectorAll('.toast[data-bs-autohide="false"]')).forEach(function (el) {
        var toast = bootstrap.Toast.getOrCreateInstance(el);
        if (!el.classList.contains('show')) toast.show();
    });
});
