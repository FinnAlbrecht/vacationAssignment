// Mock todos data store
let mockTodos = [
  {
    id: 1,
    title: 'Erste Aufgabe',
    description: 'Das ist eine Test-Aufgabe zum Überprüfen des Systems',
    time: '10:00',
    date: '2024-01-20',
    categorie: 'Arbeit'
  },
  {
    id: 2,
    title: 'Zweite Aufgabe',
    description: 'Eine weitere Beispiel-Aufgabe für die Demonstation',
    time: '14:30',
    date: '2024-01-20',
    categorie: 'Persönlich'
  }
];

export default async function handler(req, res) {
  const { id } = req.query;
  
  if (!id) {
    return res.status(400).json({ message: 'ID erforderlich' });
  }

  const todoId = parseInt(id);

  if (req.method === 'GET') {
    // Get a specific todo
    const todo = mockTodos.find(t => t.id === todoId);
    if (!todo) {
      return res.status(404).json({ message: 'Aufgabe nicht gefunden' });
    }
    res.status(200).json(todo);
  } else if (req.method === 'PUT') {
    // Update a todo
    const todoIndex = mockTodos.findIndex(t => t.id === todoId);
    if (todoIndex === -1) {
      return res.status(404).json({ message: 'Aufgabe nicht gefunden' });
    }

    const { title, description, time, date, categorie } = req.body;
    if (!title || !time || !date || !categorie) {
      return res.status(400).json({ message: 'Erforderliche Felder fehlen' });
    }

    mockTodos[todoIndex] = {
      ...mockTodos[todoIndex],
      title,
      description: description || '',
      time,
      date,
      categorie
    };

    res.status(200).json(mockTodos[todoIndex]);
  } else if (req.method === 'DELETE') {
    // Delete a todo
    const todoIndex = mockTodos.findIndex(t => t.id === todoId);
    if (todoIndex === -1) {
      return res.status(404).json({ message: 'Aufgabe nicht gefunden' });
    }

    mockTodos.splice(todoIndex, 1);
    res.status(200).json({ message: 'Aufgabe gelöscht' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
