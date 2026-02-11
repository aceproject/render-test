const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: `Hello ${process.env.APP_VERSION}` });
});

app.listen(process.env.PORT || 3000);

