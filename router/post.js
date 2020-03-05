const express = require('express')
const router = express.Router()

const Post = require('../config/sequelize')

// Get All post
router.get('/', (req, res) => {
    res.json("Test router")
    // Post.findAll()
    //     .then((result) => {
    //         res.json(result)   
    //     }).catch((err) => {
    //         res.json({ Post: `Error`})
    //     });
})

// Create Post
router.post('/', (req, res) => {
    console.log(`Post: ${req.body}`)
    Post.create(req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json({ Post: `Post fail`})
        });
})


module.exports = Post