const express = require('express');
const router= express.Router();
const {getBlogs , createBlog, deletePost} = require('../controller/blogs')
  
router.get('/', getBlogs)

router.post('/', createBlog)

router.delete("/:title", deletePost)

module.exports= router;
