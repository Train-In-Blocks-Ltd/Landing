const stripe = require('stripe')('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')
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json; charset=UTF-8',
  'X-Frame-Options': 'DENY',
  'Strict-Transport-Security': 'max-age=15552000; preload',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  'Content-Security-Policy': 'default-src "self"'
}

exports.handler = async function handler (event, context, callback) {
  if (event.httpMethod === 'OPTIONS') {
    return callback(null, {
      statusCode: 200,
      headers,
      body: ''
    })
  } else {
    try {
      const checkout = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: JSON.parse(event.body).line_items,
        mode: 'subscription',
        allow_promotion_codes: true,
        success_url: 'https://traininblocks.com/success/',
        cancel_url: 'https://traininblocks.com/cancelled/'
      })
      return callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(checkout.id)
      })
    } catch (e) {
      return callback(null, {
        statusCode: 500,
        headers,
        body: JSON.stringify(e)
      })
    }
  }
}
