const express = require('express')
const router = express.Router()
const fs = require('fs')

router.post('/addImg', function (req, res) {
    const oldFile = `${req.file.destination}/${req.file.filename}` //指定旧文件
    const newFile = `${req.file.destination}/${req.file.originalname}` //指定新文件
    console.log(req.file)
    fs.rename(oldFile, newFile, function (err) {
        if (err) {
            res.send({
                msg1: '上传失败！',
                msg2: err.message,
            })
        } else {
            res.send('上传成功！')
        }
    })
})

module.exports = router
