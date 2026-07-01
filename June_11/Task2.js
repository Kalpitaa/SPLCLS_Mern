const users = [
  { id: 1, name: "Sudhan" },
  { id: 2, name: "Kumar" },
  { id: 3, name: "Ravi" }
];

const user = users.find(function(item) {
  return item.id === 2;
});

console.log("ID:", user.id);
console.log("Name:", user.name);