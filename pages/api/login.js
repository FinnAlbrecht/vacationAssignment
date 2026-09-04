export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email und Passwort erforderlich' });
  }

  // Mock implementation - accept any email/password
  const user = {
    id: 1,
    firstname: 'Test',
    lastname: 'User',
    email,
  };

  res.status(200).json({ user, accessToken: 'mock-token' });
}