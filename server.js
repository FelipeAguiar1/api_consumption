const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.get('/', (res, req) => {
    return res.json()
})

app.listen(3030);