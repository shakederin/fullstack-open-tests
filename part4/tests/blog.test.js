const { it } = require('@jest/globals');
const {dummy , totalLikes, favoriteBlog , mostBlogs , mostLikes} = require('../utils/list_helper');
const mockData =  [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
]

test('testing dummy', ()=>{
    const array =[];
    expect(dummy(array)).toBe(1);
})

describe('Blog Tests', ()=>{

  test('getting total likes', ()=>{
    expect(totalLikes(mockData)).toBe(36);
  })
  
  it('should return the blog with most likes', ()=>{
    expect(favoriteBlog(mockData)).toEqual(mockData[2]);
  })
  
  it('should return the author with most blog posts', ()=>{
    expect(mostBlogs(mockData)).toEqual({author: "Robert C. Martin",
    blogs: 3})
  })
  it('should return the author with most likes', ()=>{
    expect(mostLikes(mockData)).toEqual({"author": "Edsger W. Dijkstra", "likes": 17})
  })

})