const checkboxContainer = document.getElementById('checkboxContainer');
const batchSize = 10000; // Number of checkboxes to load at a time
let totalCheckboxes = 0;

function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox-item';
    return checkbox;
}

function loadCheckboxes() {
    for (let i = 0; i < batchSize; i++) {
        const checkbox = createCheckbox();
        checkboxContainer.appendChild(checkbox);
        totalCheckboxes++;
    }
}

function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadCheckboxes();
    }
}

// Initial load
loadCheckboxes();

// Add scroll event listener
window.addEventListener('scroll', handleScroll);