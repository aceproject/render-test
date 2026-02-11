const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Render! ver.2' });
});

app.listen(process.env.PORT || 3000);

