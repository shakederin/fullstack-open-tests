const { it, expect } = require("@jest/globals");
const mongoose = require("mongoose")
const supertest = require("supertest");
const app = require("../index")
const Blog = require("../modules/model")
const api = supertest(app);
const mockData =  [
    {
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
    },
    {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
    },
    {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
    },
    {
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
    },
    {
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
    },
    {
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
    }  
  ]

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.create(mockData)
  })

describe("Back-End Testing", ()=>{
    it("should return correct numbers of blogs from get request", async ()=>{
        const response = await api.get("/api/blogs");
        expect(response.body.length).toBe(mockData.length)
    })
    it("should check if the blog has a id property", async ()=>{
        const response = await api.get("/api/blogs");
        for(const blog of response.body){
            expect(blog._id).toBeDefined()
        }
    })
    it("should check if a blog add after post request", async ()=>{
        await api.post("/api/blogs").send({
            title: "add post",
            author: "shaked",
            url: "https://reactpatterns.com/",
            likes: 7
        });
        const response = await api.get("/api/blogs");
        for(const blog of response.body){
            if(blog.title === "shaked"){
                expect(blog.title).toBe("add post");
            }
        }
        expect(response.body).toHaveLength(7)
    })
    it("should assign to the LIKE property the value 0, if it missing", async ()=>{
        await api.post("/api/blogs").send({
            title: "add post",
            author: "shaked",
            url: "https://reactpatterns.com/",
        });
        const response = await api.get("/api/blogs");
        for(const blog of response.body){
            if(blog.title === "shaked"){
                expect(blog.like).toBe(0);
            }
        }
    })

}, 10000) 


afterAll(() => {
    mongoose.connection.close();
    app.killServer()
  })