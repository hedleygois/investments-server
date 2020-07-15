import express from "express";

import { queryDB } from "../api/Api";

const router = express.Router();

router.post("/query", (req, res) =>
  queryDB({
    query: req.body.query,
    variables: req.body.variables,
  }).then(queryResult => res.status(200).json(queryResult))
);

export default router;
