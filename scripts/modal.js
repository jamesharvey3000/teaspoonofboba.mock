let clickableElements = [];

function openModal(drinkId) {
    const modal = document.getElementById(drinkId);
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = '999'; // Ensure overlay is on top of other content but below modal

    document.body.appendChild(overlay);
    modal.style.display = 'block';
    modal.style.zIndex = '1000'; // Ensure modal is on top of the overlay

    // Disable all clickable elements except the modal and close button
    clickableElements = document.querySelectorAll('a, button, input, [onclick]');
    clickableElements.forEach(el => {
        if (!modal.contains(el)) {
            el.dataset.oldTabindex = el.tabIndex;
            el.tabIndex = -1;
        }
    });

    // Disable scrolling
    document.body.style.overflow = 'hidden';
}

function closeModal(drinkId) {
    const modal = document.getElementById(drinkId);
    const overlay = document.getElementById('modal-overlay');

    if (overlay) {
        overlay.remove(); // Remove the overlay
    }

    modal.style.display = 'none';

    // Re-enable all clickable elements
    clickableElements.forEach(el => {
        el.tabIndex = el.dataset.oldTabindex;
        delete el.dataset.oldTabindex;
    });

    // Re-enable scrolling
    document.body.style.overflow = 'auto';
}
