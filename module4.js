let serviceAmount = prompt("Enter service amount (between $5 and $500):");
let rating = prompt("Enter service rating - great, ok, or poor:");

function isValidQuality(input) {
  const validOptions = ["great", "ok", "poor"];
  input = input.toLowerCase();
  return validOptions.includes(input);
}

function isValidAmount(amount) {
  amount = parseFloat(amount);
  if (isNaN(amount) || amount < 5 || amount > 500) {
    return false;
  }
  return true;
}

if (!isValidQuality(rating)) {
  alert("Invalid rating — please enter 'great', 'ok', or 'poor'.");
} else if (!isValidAmount(serviceAmount)) {
  alert("Invalid amount — please enter a number between $5 and $500.");
} else {
  function calculateTip(amount, quality) {
    let tipPercentage;

    if (quality === "poor") {
      tipPercentage = 0.10;
    } else if (quality === "ok") {
      tipPercentage = 0.15;
    } else if (quality === "great") {
      tipPercentage = 0.20;
    }

    return amount * tipPercentage;
  }

  let amount = parseFloat(serviceAmount);
  let tip = calculateTip(amount, rating.toLowerCase());
  let total = amount + tip;

  alert(
    `Service amount: $${amount.toFixed(2)}\n` +
    `Service quality: ${rating.toLowerCase()}\n` +
    `Tip: $${tip.toFixed(2)}\n` +
    `Total to pay: $${total.toFixed(2)}`
  );
}

