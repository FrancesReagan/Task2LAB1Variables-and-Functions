function calculateTotalCost(price, quantity, taxRate) {
  //check if all are valide numbers//
  if (
    typeof price !== "number" || isNaN(price) ||
    typeof quantity !== "number" || isNaN(quantity) ||
    typeof taxRate !== "number" || isNaN(taxRate)
  ){
    return "Invalid input.";
  }

  //Total cost calculate//
  const totalCost = (price * quantity) * (1 + taxRate);

  return totalCost;
}

//Function to handle the button click//
function handleCalculation() {
  //Get Values from input fields//
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const taxRate = parseFloat(document.getElementById("taxRate").value);

  //Total Cost Calculate//
  const result = calculateTotalCost(price, quantity,taxRate);

  //Display result//
  const resultElement = document.getElementById("result");

  if (result === "Invalid input.") {
    resultElement.textContent = result;
    resultElement.style.color = "#e53e3e"; //error color Red//
  } else {
    //result format will be currency//
    const formattedResult = "$" + result.toFixed(2);
    resultElement.textContent = formattedResult;
    resultElement.style.color = "#2b6cb0"; //success blue color//
  }
}

// Event listern for when DOM is loaded to handle handleCalculation function//
document.addEventListener("DOMContentLoaded", function() {
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", handleCalculation);
});