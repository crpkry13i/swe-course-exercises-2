/** Server for bank.ly. */
const app = require("./app");
const { PORT } = require("./config"); // new code

// BUG #4: Express is listening for a PORT which has been configured in the config.js file
// but not used in the server.js file.

// app.listen(3000, () => {
//   console.log(`Server starting on port 3000`);
// });

// New Code
app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
