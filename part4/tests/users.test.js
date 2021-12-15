const { it } = require("@jest/globals");
const User = require("../modules/user.model");
const mongoose = require('mongoose');
const supertest = require("supertest");
const app = require("../index");
const api = supertest(app);

beforeEach(async () => {
    await User.deleteMany({})
})

describe("users tests", ()=>{
    it("invalid users cannot be created", async ()=>{
        const newUser = {
            "name": "ido",
            "password": "30/01/1995",
            "username": "w"
    }
        const response = await api.post("/api/user").send(newUser)
        expect(response.status).toBe(400);
    })
})

afterAll(() => {
    mongoose.connection.close();
    app.killServer()
  })