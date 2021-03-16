import express from "express";
import createError from "http-errors";
import logger from "morgan";

import indexRouter from "./routes/index";

let app = express();

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// adding routes
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.write(err.stack);
  res.send();
});

app.listen(3000, () => console.log("Server running on port 3000"));
