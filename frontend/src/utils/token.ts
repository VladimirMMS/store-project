
export async function setToken(token:string) {
    return localStorage.setItem('token', token);
    
}

export function getToken() {
    return localStorage.getItem('token')
}


export function deleteToken() {
    return localStorage.clear()
}