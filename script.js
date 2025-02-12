document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", calculatePL);
});

function calculatePL() {
    let entry = parseFloat(document.getElementById("entryPrice").value);
    let exit = parseFloat(document.getElementById("exitPrice").value);
    let leverage = parseFloat(document.getElementById("leverage").value);
    let margin = parseFloat(document.getElementById("margin").value);
    let tradeType = document.getElementById("tradeType").value;
    
    if (!entry || !exit || !leverage || !margin) {
        alert("Please fill in all fields");
        return;
    }
    
    let contractSize = margin * leverage;
    let priceDifference = tradeType === "long" ? (exit - entry) : (entry - exit);
    let profitLoss = priceDifference * (contractSize / entry);
    let liquidationPrice = tradeType === "long" ? (entry - (entry / leverage)) : (entry + (entry / leverage));
    
    document.getElementById("profitLoss").innerText = `Profit/Loss: $${profitLoss.toFixed(2)}`;
    document.getElementById("liquidationPrice").innerText = `Liquidation Price: $${liquidationPrice.toFixed(2)}`;
}
