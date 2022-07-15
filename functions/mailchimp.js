const axios = require("axios");
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
exports.handler = function handler(event, context, callback) {
  if (event.httpMethod === "OPTIONS") {
    return callback(null, {
      statusCode: 200,
      headers,
      body: "",
    });
  } else if (event.body) {
    const payload = JSON.parse(event.body);
    axios
      .post(
        "https://us8.api.mailchimp.com/3.0/lists/73101450d0/members/",
        {
          email_address: payload.email,
          status: "subscribed",
          tags: ["Lead", payload.tag],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Origin: "https://traininblocks.com",
            Authorization: `Basic ${process.env.MAILCHIMP}`,
          },
        }
      )
      .then((mc) => {
        return callback(null, {
          statusCode: 200,
          headers,
          body: JSON.stringify(mc.data),
        });
      })
      .catch((e) => {
        return callback(null, {
          statusCode: e.response.data.status,
          headers,
          body: e.response.data.detail,
        });
      });
  } else {
    return callback(null, {
      statusCode: 400,
      headers,
      body: "400 - Bad Request",
    });
  }
};
