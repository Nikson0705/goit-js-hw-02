function makeTransaction(quantity, pricePerDroid, customerCredits) {
	const totalCost = quantity * pricePerDroid

	if (totalCost > customerCredits) {
		return `Insufficient funds!`
	} else {
		return `You ordered ${quantity} droids worth ${totalCost} credits!`
	}
}