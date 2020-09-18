const API_URL = 'http://localhost:1212';

export async function listLogEntrys() {
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json();
}