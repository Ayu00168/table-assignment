const dataRouter = require("express").Router();
const dataNewsDetails = require("../models/dataModel");

dataRouter.post("/create", async (req, res) => {
  const data = new dataNewsDetails({
    end_year: req.body.end_year,
    intensity: req.body.intensity,
    sector: req.body.sector,
    topic: req.body.topic,
    insight: req.body.insight,
    url: req.body.url,
    region: req.body.region,
    start_year: req.body.start_year,
    impact: req.body.impact,
    added: req.body.added,
    published: req.body.published,
    country: req.body.country,
    relevance: req.body.relevance,
    pestle: req.body.pestle,
    source: req.body.source,
    title: req.body.title,
    likelihood: req.body.likelihood,
  });

  try {
    const savedData = await data.save();
    res.status(200).json(savedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

dataRouter.get("/getData", async (req, res) => {
  try {
    const aggregateData = await dataNewsDetails.aggregate([{ $limit: 50 }]);
    res.status(200).json(aggregateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = dataRouter;
