// Example of creating a Checkout session for a deposit
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'Deposit for Service',
      },
      unit_amount: 5000, // $50.00
    },
    quantity: 1,
  }],
  mode: 'payment',
  success_url: 'https://www.trekxstudios.com/success',
  cancel_url: 'https://www.trekxstudios.com/cancel',
});

