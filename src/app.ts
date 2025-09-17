import videoRouter from "./routes/videoRoute.ts";
import express from "express";
const app = express();
import path from "path";
import cors from "cors";
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/hls-output", express.static(path.join(process.cwd(), "hsl-output"))); // process.cwd() will give the root directory of the project

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);

// routes
app.use("/api", videoRouter);
// app.use("/", (req, res) => {
//   res.send("API is working");
// });

export default app;
