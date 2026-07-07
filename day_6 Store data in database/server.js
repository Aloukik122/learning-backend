const app = require('./src/app');
const connectDB = require('./src/db/db.js');

connectDB();

app.listen(3000, () => {
  console.log('server is running on 3000');
});
