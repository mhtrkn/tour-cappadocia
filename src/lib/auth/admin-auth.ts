export const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'admin123',
};

export function verifyAdminCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  const session = localStorage.getItem('adminSession');
  if (!session) return false;

  try {
    const { token, expiresAt } = JSON.parse(session);
    return token && new Date(expiresAt) > new Date();
  } catch {
    return false;
  }
}

export function setAdminSession() {
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24);

  localStorage.setItem('adminSession', JSON.stringify({
    token: 'admin-' + Date.now(),
    expiresAt: expiresAt.toISOString(),
  }));
}

export function clearAdminSession() {
  localStorage.removeItem('adminSession');
}