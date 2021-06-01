const express = require('express');

const app = express();

const PORT = 3030;

app.get('/user/lol/:username', (req, res) => {
  const params = req.params;

  res.json({
    username: params.username,
  });
});

app.listen(PORT, () => console.log('Server rodando 🚀'));
