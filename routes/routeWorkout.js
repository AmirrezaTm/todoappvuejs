const express = require('express')
const { get_blog, getid_blog, post_blog, delete_blog, patch_blog } = require('../controllers/blogController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

// require auth for all workout routes
// router.use(requireAuth)

// get all books
router.get('/books', get_blog)

// get a single book
router.get('/books/:id', getid_blog)

// post book
router.post('/books', post_blog)

// delete book
router.delete('/books/:id', delete_blog)

// update book
router.patch('/books/:id', patch_blog)

module.exports = router;