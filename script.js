document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateBtn").addEventListener("click", calculatePL);
});

function calculatePL() {
    console.log("calculatePL function is running!"); // Debugging

    let entry = parseFloat(document.getElementById("entryPrice").value);
    let exit = parseFloat(document.getElementById("exitPrice").value);
    let leverage = parseFloat(document.getElementById("leverage").value);
    let margin = parseFloat(document.getElementById("margin").value);
    let tradeType = document.getElementById("tradeType").value;
    
    if (isNaN(entry) || isNaN(exit) || isNaN(leverage) || isNaN(margin)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }
    
    let contractSize = margin * leverage;
    let priceDifference = tradeType === "long" ? (exit - entry) : (entry - exit);
    let profitLoss = priceDifference * (contractSize / entry);
    let liquidationPrice = tradeType === "long" ? (entry - (entry / leverage)) : (entry + (entry / leverage));

    console.log("Profit/Loss:", profitLoss);
    console.log("Liquidation Price:", liquidationPrice);

    document.getElementById("profitLoss").innerText = `Profit/Loss: $${profitLoss.toFixed(2)}`;
    document.getElementById("liquidationPrice").innerText = `Liquidation Price: $${liquidationPrice.toFixed(2)}`;
}
