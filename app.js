import express from "express";
import { config } from "dotenv";
import ErrorMiddleware  from "./middlewares/Error.js";
// import ErrorHandler from "./utils/errorHandler.js";
import cookieParser from "cookie-parser";
config({
  path: "./config/config.env",
});
const app = express();
 
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
 

  
  import course from "./routes/courseRoutes.js";
  import user from "./routes/userRoutes.js";
  import other from "./routes/otherRoutes.js";
 
 

  app.use("/api/v1", course);
  app.use("/api/v1", user);
  app.use("/api/v1", other);


export default app;

app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  )
);

app.use(ErrorMiddleware);
// app.use(ErrorHandler);

 