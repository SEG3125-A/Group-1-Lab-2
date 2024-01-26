document.addEventListener('DOMContentLoaded', function () {
    console.log("Applying filters...")
    applyFilters();
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
