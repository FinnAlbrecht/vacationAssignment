import { getTodoById, updateTodo, deleteTodo } from '../../../lib/todos';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { id } = req.query;

  if (req.method === 'GET') {
    const todo = getTodoById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } else if (req.method === 'PUT') {
    const { title, time, date, description, categorie } = req.body;
    const updatedTodo = updateTodo(id, { title, time, date, description, categorie });
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(updatedTodo);
  } else if (req.method === 'DELETE') {
    const deleted = deleteTodo(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(204).end();
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
