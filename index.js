const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");

const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to DB..."))
  .catch((err) => console.log(`DB Error: ${err.message}`));

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());
// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//    console.log(req.headers);
//   next();
// });

app.use("/api/posts", postRoutes);
app.use("/api", authRouter);
app.use("/api", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.....`);
});
