const express = require("express");
const app = express();
const port = 3000;

// TRADITIONAL METHOD
// function isOldEnough(age) {
//   return age >= 14;
// }

// app.get("/ride2", (req, res) => {
//   if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "you're good to go to ride2",
//     });
//   } else {
//     res.status(411).json({
//       msg: "you're not eligible, grow up kiddo",
//     });
//   }
// });

// app.get("/ride1", (req, res) => {
//   if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "you're good to go to ride1",
//     });
//   } else {
//     res.status(411).json({
//       msg: "you're not eligible, grow up kiddo",
//     });
//   }
// });

// using MIDDLEWARES
function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "grow up kiddo",
    });
  }
}

// we can call the isOldEnoughMiddleware individually or for all the get req's we can use below
app.use(isOldEnoughMiddleware); // triggers only the end points below it.

app.get("/ride1", (req, res) => {
    res.json({
        msg: "go ahead sir (ride1)",
    });
});

app.get("/ride2", (req, res) => {
    res.json({
    msg: "go ahead sir (ride2)",
});
});

app.listen(port, () => {
  console.log(`port listening on ${port}`);
});
