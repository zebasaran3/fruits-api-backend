//run the actual program
require('dotenv').config();
const app = require("./app")
const port = process.env.PORT
 
app.listen(port, () => {
    console.log(`Simple api listening on port ${port}`);
});