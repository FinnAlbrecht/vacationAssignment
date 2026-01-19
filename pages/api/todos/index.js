export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Return all todos
    res.status(200).json(mockTodos);
  } else if (req.method === 'POST') {
    // Create a new todo
    const { title, description, time, date, categorie } = req.body;
    
    if (!title || !time || !date || !categorie) {
      return res.status(400).json({ message: 'Erforderliche Felder fehlen' });
    }

    const newTodo = {
      id: Math.max(...mockTodos.map(t => t.id), 0) + 1,
      title,
      description: description || '',
      time,
      date,
      categorie
    };

    mockTodos.push(newTodo);
    res.status(201).json(newTodo);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
