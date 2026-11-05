import { describe, it, expect, beforeEach } from "vitest";
import request from "supertest";
import app from "../app.js";
import { resetUsers } from "../data/users.js";

describe("User API", () => {
  beforeEach(() => {
    resetUsers();
  });

  it("should return a list of users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
  it("should create a user", async () => {
    const response = await request(app).post("/api/users").send({
      name: "Test User",
      email: "test@example.com",
    });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe("Test User");
  });
  it("it should show an error if the user already exists", async () => {
    const payload = {
      name: "Test User",
      email: "test@example.com",
    };

    await request(app).post("/api/users").send(payload);
    const response = await request(app).post("/api/users").send(payload);

    expect(response.status).toBe(409);
  });
  it("should reject a user without an email", async () => {
    const response = await request(app).post("/api/users").send({
      name: "Test User",
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("name and email are required");
  });
});