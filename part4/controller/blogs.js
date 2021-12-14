const Blog = require('../modules/model')

exports.getBlogs = (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  };

exports.createBlog = (request, response) => {
  const requestBlog = request.body;
  if(!requestBlog.title || !requestBlog.url){
    response.status(400).send("some properties are missing");
    return;
  }
  if(!requestBlog.like){
    requestBlog.like = 0;
  }
  const blog = new Blog(requestBlog);
  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
};
