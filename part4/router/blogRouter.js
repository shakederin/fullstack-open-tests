const express = require('express');
const router= express.Router();
const {getBlogs , createBlog, deletePost, updateBlog} = require('../controller/blogs')
  
router.get('/', getBlogs);

router.delete("/:title", deletePost);

router.post("/update/:title", updateBlog);

router.post('/:title', createBlog);

router.post('/', createBlog);

module.exports= router;
