const express = require('express')
const auth = require('./authRoute')
const router = express.Router()

router.get(`/api/v1`, (_req, res) => {
    res.json({
        "message": "Hello World"
    })
})

router.use(auth)

module.exports = router;