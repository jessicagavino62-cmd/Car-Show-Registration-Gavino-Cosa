const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5205').replace(/\/$/, '');

async function readJson(response) {
  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(detail || `Registration API returned ${response.status}`);
  }
  return response.json();
}

export async function getRegistrations({ participantName = '', type = '', status = '', page = 1, pageSize = 10, signal } = {}) {
  const query = new URLSearchParams({ page: String(page), pageSize: String(pageSize) });
  if (participantName.trim()) query.set('participantName', participantName.trim());
  if (type && type !== 'All') query.set('type', type);
  if (status && status !== 'All') query.set('status', status);

  const response = await fetch(`${API_BASE_URL}/api/registrations?${query}`, { signal });
  return readJson(response);
}

export async function getSummary({ signal } = {}) {
  const response = await fetch(`${API_BASE_URL}/api/registrations/summary`, { signal });
  return readJson(response);
}
