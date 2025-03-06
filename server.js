const express = require('express')

const app = express()

    app.get('/', (req, res) => {
        res.json({
            status: 200,
            message: "Welcome to Balanced Live"
        })
    })

    app.listen(8080, () => {
        console.log('server running on port 80')
    })