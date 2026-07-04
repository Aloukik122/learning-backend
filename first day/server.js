const app = require('./src/app'); // server ko requrire krna from 'app.js'

app.listen(3000, () => {
  console.log('server is running on 3000');
});
