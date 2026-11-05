export const users = [
  { id: 1, name: "Ada Lovelace", email: "ada@teamflow.dev" },
  { id: 2, name: "Alan Turing", email: "alan@teamflow.dev" },
];

let nextId = users.length + 1;

export function takeId() {
  const id = nextId;
  nextId += 1;
  return id;
}
