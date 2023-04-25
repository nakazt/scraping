const PORT = 3000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const URL = "https://www.ves.co.jp/";
const data = [];

axios(URL)
.then((response) => {
  const htmlParser = response.data;

  const $ = cheerio.load(htmlParser);

  $(".list", htmlParser).each(function () {
    const list = $(this).text();
    data.push({ list });
    console.log(data);
  });
}).catch(error => console.log(error));

app.listen(PORT, console.log("server is running!"));
