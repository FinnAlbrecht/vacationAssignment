
import fs from 'fs';
import path from 'path';

const todosFilePath = path.join(process.cwd(), 'lib', 'todos.json');

let todos = JSON.parse(fs.readFileSync(todosFilePath, 'utf8'));

function saveTodos() {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
}

export function getTodos() {
  return todos;
}

export function addTodo(todo) {
  const newTodo = { id: Date.now().toString(), ...todo };
  todos.push(newTodo);
  saveTodos();
  return newTodo;
}

export function getTodoById(id) {
  return todos.find(todo => todo.id === id);
}

export function updateTodo(id, updatedTodo) {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return null;
  todos[index] = { ...todos[index], ...updatedTodo };
  saveTodos();
  return todos[index];
}

export function deleteTodo(id) {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return false;
  todos.splice(index, 1);
  saveTodos();
  return true;
}