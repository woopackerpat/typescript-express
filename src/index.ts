import path from "path";
const my_path = path.join(__dirname, "dotenv/config");
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });
// import "dotenv/config";
import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/error";
import todoRoutes from "./routes/todo-route";
import notFoundHandler from "./middlewares/notFound";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/todo", todoRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));
