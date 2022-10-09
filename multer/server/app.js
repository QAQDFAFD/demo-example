const express = require('express')
const multer = require('multer')
const upload = multer({
    dest: './uploads',
})
const app = express()
const handler = require('./handler')

app.use('/', upload.single('files'), handler)

app.listen(9009, () => {
    console.log('后端运行在 9009 端口')
})
