function calculatePL() {
    let entryPrice = parseFloat(document.getElementById("entryPrice").value);
    let exitPrice = parseFloat(document.getElementById("exitPrice").value);
    let leverage = parseFloat(document.getElementById("leverage").value);
    let positionSize = parseFloat(document.getElementById("positionSize").value);

    if (!entryPrice || !exitPrice || !leverage || !positionSize) {
        document.getElementById("result").innerHTML = "Please fill all fields correctly.";
        return;
    }

    let priceChange = (exitPrice - entryPrice) / entryPrice;  
    let profitLoss = priceChange * leverage * positionSize; 

    document.getElementById("result").innerHTML = `Profit/Loss: $${profitLoss.toFixed(2)}`;
}
