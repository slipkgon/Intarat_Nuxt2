const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
app.use(express.json({ limit: "50mb" }));

app.post("/webhook", (req, res) => {
  let reply_token = req.body.events[0].replyToken;
  reply(reply_token);
  res.sendStatus(200);
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from serverMiddleware" });
});

const token =
  "yeqRrLl9vAIDN3npUy8UqhPTmFBtBXyEIcwNN5xFiUudzmMzXzREC2USxgOr8Mgg9Y2miXXs+SjempGkZxAJDytmHJVl8oSK++7QN5lIm5nBdD2IBS3UIFKBjzNhIIn07LGFKexN+T6E7xafn56kkAdB04t89/1O/w1cDnyilFU=";

function reply(reply_token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  let body = JSON.stringify({
    replyToken: reply_token,
    messages: [
      {
        type: "text",
        text: "Hello",
      },
    ],
  });
  request.post(
    {
      url: "https://api.line.me/v2/bot/message/reply",
      headers: headers,
      body: body,
    },
    (err, res, body) => {
      console.log(body);
    }
  );
}
module.exports = app;
