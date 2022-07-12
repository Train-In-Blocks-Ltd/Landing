const stripe = require("stripe")(process.env.STRIPE);
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json; charset=UTF-8",
  "X-Frame-Options": "DENY",
  "Strict-Transport-Security": "max-age=15552000; preload",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
  "Content-Security-Policy": 'default-src "self"',
};

exports.handler = async function handler(event, context, callback) {
  if (event.httpMethod === "OPTIONS") {
    return callback(null, {
      statusCode: 200,
      headers,
      body: "",
    });
  } else {
    try {
      const checkout = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: JSON.parse(event.body).line_items,
        mode: "subscription",
        allow_promotion_codes: true,
        subscription_data: {
          trial_period_days: 14,
        },
        success_url: `https://traininblocks.com/success/?value=${
          JSON.parse(event.body).price
        }`,
        cancel_url: `https://traininblocks.com/cancelled/?value=${
          JSON.parse(event.body).price
        }`,
      });
      return callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(checkout.id),
      });
    } catch (e) {
      return callback(null, {
        statusCode: 500,
        headers,
        body: JSON.stringify(e),
      });
    }
  }
};
