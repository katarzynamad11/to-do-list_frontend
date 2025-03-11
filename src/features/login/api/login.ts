

export const login = async (username: string, password: string): Promise<string> => {
    const response = await fetch('http://localhost:9000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${username}:${password}`)
        },
        credentials: 'include'  // jeśli używasz ciasteczek
    });

    if(response.status !== 200) throw new Error('Login failed');
    return await response.json();
}