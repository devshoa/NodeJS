// sử dụng thư viện express
const express = require('express')
const app = express()
const port = 3000

// route
app.get('/tintuc', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})