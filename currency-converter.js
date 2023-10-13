
document.getElementById("convertBtn").addEventListener("click", async () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  try {
    const convertedAmount = await convertCurrency(amount, fromCurrency, toCurrency);
    document.getElementById("result").textContent = `${convertedAmount} ${toCurrency}`;
  } catch (error) {
    document.getElementById("result").textContent = `Error: ${error.message}`;
  }
});
// Function to fetch the latest exchange rates from an API
async function fetchExchangeRates(baseCurrency) {
    const url = `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.rates;
    } catch (error) {
      throw new Error(`Failed to fetch exchange rates: ${error}`);
    }
  }
  
  // Function to convert a given amount from one currency to another
  async function convertCurrency(amount, fromCurrency, toCurrency) {
    const rates = await fetchExchangeRates(fromCurrency);
    const rate = rates[toCurrency];
    if (!rate) {
      throw new Error(`Invalid currency: ${toCurrency}`);
    }
    const convertedAmount = amount * rate;
    return convertedAmount.toFixed(2);
  }
  
  