import asyncHandler from "../middleware/asyncHandler.js";
import { listUsers, getUserById, createUser as createUserRecord } from "../services/users.service.js";

function parseUserId(value) {
  const id = Number(value);
  if (!Number.isInteger(id)) {
    const error = new Error("user id must be an integer");
    error.status = 400;
    throw error;
  }
  return id;
}

export const getUsers = asyncHandler(async (req, res) => {
  res.json(listUsers());
});

export const getUser = asyncHandler(async (req, res) => {
  const id = parseUserId(req.params.id);
  const user = getUserById(id);

  if (!user) {
    const error = new Error(`User ${id} not found`);
    error.status = 404;
    throw error;
  }

  res.json(user);
});

export const createUser = asyncHandler(async (req, res) => {
  const user = createUserRecord(req.body ?? {});
  res.status(201).json(user);
});
