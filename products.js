// re-did entire products script
// essentially this just is supposed to take the products from the storage,
// and then display them using the style created using createElement function
document.addEventListener('DOMContentLoaded', function() {
    // getting product container
    var productContainer = document.getElementById('productContainer');
    // retrieves product list from local storage
    var products = JSON.parse(localStorage.getItem('filteredProducts'));

    // looping through product list using forEach()
    if (products && products.length > 0) {
        products.forEach(function(product) {

            // this follows the format you guys created, except using the
            var itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.id = product.id;

            var nameDiv = document.createElement('div');
            nameDiv.textContent = product.name;

            var priceP = document.createElement('p');
            priceP.className = 'price';
            priceP.textContent = `$${product.price.toFixed(2)}`;

            var selectButton = document.createElement('button');
            selectButton.className = 'select-button';
            selectButton.textContent = 'Select';

            itemDiv.appendChild(nameDiv);
            itemDiv.appendChild(priceP);
            itemDiv.appendChild(selectButton);

            productContainer.appendChild(itemDiv);
        });
    } else {
        // this should never be reached since with all combinations of selections there will be at least one item
        productContainer.textContent = 'No products available';
    }
});

