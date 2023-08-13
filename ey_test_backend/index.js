const express = require("express");
const cors = require('cors');

const app = express();

const port = 3000;

app.use(cors());

const states = ["delhi", "karnataka", "tamilnadu", "punjab", "uttar pradesh", "bihar", "jharkhand", "odisha", "west bengal", "maharastra"];

app.get("/suggestions/:text", (req, res) => {
   try { 
    const text = req.params.text || "";
    const matchingTexts = states.filter((data) => data.includes(text));
    console.log(req.params, matchingTexts);
    res.status(200).send({response: "success", data: matchingTexts});
    } catch (error) {
        console.log(error);
        res.status(500).send({response: "failed", data: []});
    }
} );

app.listen(port || 3000, () => {
    console.log("Running server on port", port);
})