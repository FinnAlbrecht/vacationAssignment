export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing email or password' });
  }

  // Simple mock: accept any email/password and return a user
  const user = {
    id: 1,
    firstname: 'Test',
    lastname: 'User',
    email,
  };

  res.status(200).json({ user, accessToken: 'mock-token' });
}