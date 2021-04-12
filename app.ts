import express from "express";
import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import logger from "morgan";
import cors from "cors";

import indexRouter from "./routes/index";
import postsRouter from "./routes/posts";

let app = express();

// middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// adding routes
app.use("/", indexRouter);
app.use("/posts", postsRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.write(err.stack);
  res.send();
});

app.listen(3001, () => console.log("Server running on port 3001"));
