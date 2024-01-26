document.addEventListener('DOMContentLoaded', function () {
    
    applyFilters();
    const selectButtons = document.querySelectorAll('.select-button');

    selectButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const item = button.closest('.item');
            const productName = item.querySelector('div').textContent;
            const price = item.querySelector('.price').textContent;

            // Retrieve the current cart from localStorage or initialize it if not existing
            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Add the selected product to the cart
            cart.push({ productName, price });

            // Save the updated cart back to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });
});

function applyFilters() {
    var products = document.querySelectorAll('.products-container .item');
    var filters = {
        'Vegetarian': localStorage.getItem('vegetarianChecked') === 'true',
        'Gluten Free': localStorage.getItem('glutenFreeChecked') === 'true',
        'Organic': localStorage.getItem('organicChecked') === 'true'
    };

    products.forEach(function (product) {
        var category = product.dataset.category;
        var shouldBeVisible = !filters[category] || filters[category] === true;
        product.style.display = shouldBeVisible ? '' : 'none';
    });

    
}
