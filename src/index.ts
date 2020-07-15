import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import logger from "./logger/Logger";
import QueryDBRouter from "./routes/QueryDBRoute";

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan("combined"));

app.use(QueryDBRouter);

if (!process.env.HASURA_HEADER || !process.env.HASURA_KEY) {
  console.warn("Please set your Hasura key.");
}

// Start the server
const port = Number(process.env.PORT || 3001);
app.listen(port, () => logger.info(`Express server started on port: ${port}`));

export default app;
