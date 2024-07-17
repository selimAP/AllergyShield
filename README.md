# AllergyShield
AllergyShield is a project developed for the [miniHackathon (by Kevin Chromik)](https://minihackathon.de/), aimed at helping users protect themselves 
from allergy attacks by providing detailed information about food allergens. It uses the Open Food Facts API to fetch data about food products and their ingredients, 
making it easier for users to identify potential allergens.

## Website
[https://selim.fun/](https://selim.fun/)

### Features
- Allergen Search: Users can search for common allergens and select the ones they are allergic to.
- Barcode Scanning: Users can input the barcode of a food product to check if it contains any allergens they are sensitive to.
- Product Information: Detailed information about the product, including its name and allergen content, is displayed to the user.

### Tech Stack
- Frontend: HTML, CSS, JavaScript
- API: Open Food Facts API
- Library: QuaggaJS for barcode scanning

### How to Use
Allergen Search: Start typing the name of the allergen you are sensitive to in the search box. Select the allergen from the suggestions.
Barcode Input: After selecting the allergen, input the barcode of the food product.
Check Allergens: The app will fetch the product data and inform you if the product contains any of your specified allergens.
