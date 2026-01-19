import { getTodos, addTodo } from '../../../lib/todos';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    res.status(200).json(getTodos());
  } else if (req.method === 'POST') {
    const { title, time, date, description, categorie } = req.body;
    if (!title || !time || !date || !description || !categorie) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const newTodo = addTodo({ title, time, date, description, categorie });
    res.status(201).json(newTodo);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
