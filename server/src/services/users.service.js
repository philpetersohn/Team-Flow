import { users, takeId } from "../data/users.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function httpError(status, message) {
  const error = new Error(message);
  error.status = status;
  return error;
}

export function listUsers() {
  return users;
}

export function getUserById(id) {
  return users.find((user) => user.id === id) ?? null;
}

export function createUser(input) {
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";

  if (!name || !email) {
    throw httpError(400, "name and email are required");
  }

  if (!EMAIL_PATTERN.test(email)) {
    throw httpError(400, "email must be a valid email address");
  }

  const duplicate = users.some((user) => user.email === email);
  if (duplicate) {
    throw httpError(409, "a user with that email already exists");
  }

  const user = { id: takeId(), name, email };
  users.push(user);
  return user;
}
