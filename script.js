function generateRecipe() {
  const ingredients = document.getElementById("ingredients").value;
  const diet = document.getElementById("diet").value;
  const time = document.getElementById("time").value;
  const output = document.getElementById("output");

  if (!ingredients.trim()) {
    output.innerHTML = "Please enter some ingredients to generate a recipe.";
    return;
  }

  // Simulated recipe output (no actual AI call)
  output.innerHTML = `
    <h3>Here’s a recipe suggestion based on your input:</h3>
    <strong>Ingredients provided:</strong> ${ingredients}<br>
    <strong>Diet preference:</strong> ${diet || "None"}<br>
    <strong>Cooking time:</strong> ${time ? `Under ${time} mins` : "Not specified"}<br><br>

    <strong>Sample Recipe:</strong><br>
    <strong>Dish:</strong> Spicy Mixed Veg Stir Fry<br>
    <strong>Ingredients:</strong><br>
    - Chopped vegetables (based on your input)<br>
    - Garlic, ginger, chili (if available)<br>
    - Salt, pepper, and basic spices<br><br>

    <strong>Steps:</strong><br>
    1. Heat oil in a pan<br>
    2. Add chopped vegetables and sauté for 5-10 minutes<br>
    3. Add spices, cook till done<br>
    4. Serve hot with rice or bread<br><br>

    <em>(Note: This is a sample. AI-based suggestions will be added in a future version.)</em>
  `;
}
