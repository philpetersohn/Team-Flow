const initialUsers = [
  { id: 1, name: "Ada Lovelace", email: "ada@teamflow.dev" },
  { id: 2, name: "Alan Turing", email: "alan@teamflow.dev" },
];

export let users = [...initialUsers];

let nextId = 3;

export function takeId() {
  return nextId++;
}

export function resetUsers() {
  users = [...initialUsers];
  nextId = 3;
}
