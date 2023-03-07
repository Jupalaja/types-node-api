import "dotenv/config";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import { router } from "./routes";
import { createConnection } from "./db";
import morgan from "morgan";

const PORT = process.env.PORT || 3001;
createConnection();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
