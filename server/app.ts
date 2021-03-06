import express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('dist'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server is up on port ${PORT}`);
});
