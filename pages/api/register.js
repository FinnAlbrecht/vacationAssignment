export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstname, lastname, email, password } = req.body;

  // Validation
  if (!firstname || !email || !password) {
    return res.status(400).json({ message: 'Erforderliche Felder fehlen' });
  }

  // Mock implementation - accept any data
  const user = {
    id: Date.now(),
    firstname,
    lastname: lastname || '',
    email,
  };

  res.status(200).json({ user, accessToken: 'mock-token' });
}