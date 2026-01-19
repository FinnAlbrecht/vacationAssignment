import { addTodo } from '../lib/todos.js';

const seedData = [
  {
    title: "asdasd gehen",
    time: "10:00",
    date: "2026-01-20",
    description: "Wocheneinkauf erledigen",
    categorie: "Haushalt"
  },
  {
    title: "asdasdasd treiben",
    time: "18:00",
    date: "2026-01-21",
    description: "Joggen im Park",
    categorie: "Gesundheit"
  },
  {
    title: "Projasdasdaekt adsas",
    time: "14:00",
    date: "2026-01-22",
    description: "Finale Änderungen am Code",
    categorie: "Arbeit"
  }
];

function seedTodos() {
  for (const todo of seedData) {
    const result = addTodo(todo);
    console.log('Created todo:', result);
  }
}

seedTodos();