function getShippingCost(country) {
	let price
	let message

	switch (country) {
		case 'China':
			price = 100
			message = `Shipping to China will cost ${price} credits`
			break
		case 'Chile':
			price = 250
			message = `Shipping to Chile will cost ${price} credits`
			break
		case 'Australia':
			price = 170
			message = `Shipping to Australia will cost ${price} credits`
			break
		case 'Jamaica':
			price = 120
			message = `Shipping to Jamaica will cost ${price} credits`
			break

		default:
			message = 'Sorry, there is no delivery to your country'
	}
	return message
}