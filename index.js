const express = require('express');

const app = express();

// make a static path
app.use(express.static('public'));

app.listen(3030);
