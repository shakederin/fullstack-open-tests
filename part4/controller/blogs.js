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

exports.deletePost = async (req, res)=>{
  const blogTitle = req.params.title;
  const o = await Blog.deleteOne({title: blogTitle});
  if(o.deletedCount === 1){
    res.status(200).send("deleted successfully");
  }else{
    res.status(400).send("couldnt find blog");
  }
}

exports.updateBlog = async (req,res)=>{
  const blogTitle = req.params.title;
  console.log(blogTitle);
  const response = await Blog.updateOne({title: blogTitle},{ $inc : {likes: 1}});
  if(response.modifiedCount === 0){
    res.status(400).send("blog not found. please check the title sent.");
    return
  }
  res.status(200).send("update successfully!")
}