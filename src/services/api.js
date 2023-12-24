const apiUrl = "http://localhost:3001";

const api = {
  getResidents: async () => {
    const response = await fetch(`${apiUrl}/cudan`);
    return await response.json();
  },
  getAccounts: async () => {
    const response = await fetch(`${apiUrl}/account`);
    return await response.json();
  },
};

export default api;
