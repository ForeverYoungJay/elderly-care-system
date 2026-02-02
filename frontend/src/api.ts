export const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

export function getAccessToken(): string | null {
  return localStorage.getItem('accessToken');
}

export function setAccessToken(token: string) {
  localStorage.setItem('accessToken', token);
}

export function clearAccessToken() {
  localStorage.removeItem('accessToken');
}

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getAccessToken();
  const headers = new Headers(options.headers || {});
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }

  if (res.status === 204) {
    return undefined as T;
  }

  return res.json() as Promise<T>;
}
