const express = require('express')
const router = express.Router()

const Post = require('../config/sequelize')

// Get All post
router.get('/', (req, res) => {
    // res.json("Test router")
    Post.findAll({attributes: ['text','owner']})
        .then((result) => {
            if (result.length === 0) {
                res.json({ Post: "No have Post"})
            }
            res.json(result)   
        }).catch((err) => {
            res.json({ Post: `Error`})
        });
})

// Get All Post by id
router.get('/allPost/:user', (req, res) => {
    Post.findAll({where: {owner: req.params.user}})
        .then((result) => {
            if (result.length === 0) {
                res.json({ Post: "No have Post"})
            }
            res.json(result)   
        }).catch((err) => {
            res.json({ Post: `Error`})
        });
})

// Create Post
router.post('/', (req, res) => {
    console.log('Post : ',req.body)
    Post.create(req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json({ Post: `Post fail`})
        });
})

// Get post by id 
router.get('/handle/:id', (req, res) => {
    Post.findOne({where: {id: req.params.id}})
        .then((result) => {
            if (!result) {
                res.json({ POst: 'Post not found'})
            }
            res.json(result)
        }).catch((err) => {

        });
})

// Delete post by id
router.delete('/del/:id', (req, res) => {
    Post.destroy({ where: { id: req.params.id }})
        .then((result) => {
            res.json({ Post: 'Post delete success'})   
        }).catch((err) => {
            res.json({ Post: 'Post no have with id'})
        });
})

// Update post by id
// router.post('/update/:id', (req, res) => {
//     Post.findOne({where: {id: req.params.id}})
//         .then((post) => {
//             return post.updateAttributes(req.body)
//         })
//         // .then((result) => {
//         //     res.json(result)
//         // })
//         // .catch((err) => {
//         //     console.log(err)
//         // })
// })
router.post('/update/:id', (req, res) => {
    Post.update(req.body ,{where: {id: req.params.id}})
        .then((post) => {
            res.json(post)
        })
})

module.exports = router