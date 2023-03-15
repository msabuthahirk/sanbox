// Get the dropdown items
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Add a click event listener to each dropdown item
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    const button = item.closest('.input-group').querySelector('.dropdown-toggle');
    const value = item.dataset.value;
    button.innerHTML = item.innerHTML;
    button.dataset.value = value;
  });
});