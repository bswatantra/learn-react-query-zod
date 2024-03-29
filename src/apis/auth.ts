import { TLoginGrantType, TLoginSchema } from "../types/auth";

import https from "../utils/axios";

const apiClientId = import.meta.env.VITE_API_CLIENT_ID;
const apiClientSecret = import.meta.env.VITE_API_CLIENT_SECRET;

if (!apiClientId || !apiClientSecret) {
    throw new Error('API client ID or secret is not defined in the environment variables.');
}

const loginGrant: TLoginGrantType = {
    grant_type: 'password',
    client_id: apiClientId,
    client_secret: apiClientSecret,
    scope: '*',
};


export async function login(data: TLoginSchema) {
    return await https.post("/oauth/token", { ...data, ...loginGrant })
}

export async function me() {
    const response = await https.get("/api/user/profile")
    return response.data
}


export function storeToken(token: string) {
    localStorage.setItem('access_token', token)
}