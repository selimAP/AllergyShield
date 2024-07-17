const input = document.getElementById('allergy-input');
const suggestionsList = document.getElementById('allergy-search-suggestions-id');
const noResults = document.getElementById('no-results');
let selectedAllergy = '';

const allergies = [
    "Peanut Allergy", "Tree Nut Allergy", "Milk Allergy", "Egg Allergy", "Fish Allergy",
    "Shellfish Allergy", "Soy Allergy", "Wheat Allergy", "Gluten Allergy", "Sesame Allergy",
    "Corn Allergy", "Mustard Allergy", "Lupin Allergy", "Celery Allergy", "Potato Allergy",
    "Rye Allergy", "Barley Allergy", "Basil Allergy", "Coconut Allergy", "Tomato Allergy",
    "Peach Allergy", "Strawberry Allergy", "Carrot Allergy", "Garlic Allergy", "Honey Allergy",
    "Olive Allergy", "Nutmeg Allergy", "Chili Allergy", "Cinnamon Allergy", "Anise Allergy",
    "Tapioca Allergy"
];

input.addEventListener('input', function() {
    const query = input.value.toLowerCase();
    const suggestions = suggestionsList.getElementsByTagName('li');
    let hasResults = false;

    for (let i = 0; i < suggestions.length; i++) {
        const suggestion = suggestions[i];
        if (suggestion.textContent.toLowerCase().includes(query)) {
            suggestion.style.display = 'block';
            hasResults = true;
        } else {
            suggestion.style.display = 'none';
        }
    }

    noResults.style.display = hasResults ? 'none' : 'block';
});

function displayAllergies() {
    suggestionsList.innerHTML = '';
    allergies.forEach(allergy => {
        const li = document.createElement('li');
        li.className = 'allergy-item';
        li.textContent = allergy;
        li.onclick = () => selectAllergy(allergy);
        suggestionsList.appendChild(li);
    });
}

function selectAllergy(allergy) {
    selectedAllergy = allergy;
    input.value = allergy;
    suggestionsList.style.display = 'none'; 
    input.style.display = 'none';
    displayScannerInput();
}

function displayScannerInput() {
    const scannerInput = document.createElement('input');
    scannerInput.type = 'text';
    scannerInput.placeholder = 'Barcode:';
    document.querySelector('.allergy-search').appendChild(scannerInput);

    scannerInput.addEventListener('change', () => {
        checkAllergy(scannerInput.value);
    });
}

function checkAllergy(productCode) {
    const apiUrl = `https://world.openfoodfacts.org/api/v0/product/${productCode}.json`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.product) {
                const allergens = data.product.allergens || [];
                const isAllergic = allergens.includes(selectedAllergy);
                alert(`Product: ${data.product.product_name}\nAllergic: ${isAllergic ? 'Yes' : 'No'}`);
            } else {
                alert('Product not found.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error fetching product data.');
        });
}


displayAllergies();
