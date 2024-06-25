const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
