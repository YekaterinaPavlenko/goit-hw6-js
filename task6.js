const users = [
  { name: 'Mango', isActive: true },
  { name: 'Poly', isActive: false },
  { name: 'Ajax', isActive: true },
  { name: 'Chelsey', isActive: false },
];

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.
const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно false, то текущий элемент (user) будет записан в результирующий массив.
const inactiveUsers = users.filter(user => !user.isActive);
console.log(inactiveUsers);