const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const csv = require("csv-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.listen(8000, () => console.log(`Listening on port ${8000}`));

const TABLE_PER_PAGE = 10;
let results = [];
fs.createReadStream("./article_def_v_orig.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    results = results.map((item) => {
      return {
        articleid: item.articleid,
        subarticleid: item.subarticleid,
        articlename: item.articlename,
        external_str_id: item.external_str_id,
        ecrlongname: item.ecrlongname,
      };
    });
  });

const calculatePage = (currentPage) => {
  const total = Math.ceil(results.length / TABLE_PER_PAGE);
  const lastPage = currentPage * TABLE_PER_PAGE;
  const firstPage = lastPage - TABLE_PER_PAGE;
  return { firstPage, lastPage, total };
};

app.get("/table", (req, res) => {
  const current = req.query.currentPage;
  const { firstPage, lastPage, total } = calculatePage(current);
  const data = { data: results.slice(firstPage, lastPage), total: total };
  console.log(data);
  res.send(data);
});
