import { SignupForm } from "./schema"
import { apiRequest } from "../../network/client"

export async function signup(formData: SignupForm) {
    console.log("🚀 ~ signup ~ formData:", formData)
    await apiRequest<SignupForm>('users', { method: 'Post', }, formData)
}

export async function login(formData: FormData) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
    const response = await fetch(`${apiUrl}/v1/auth/login`, {
        method: 'POST',
        body: formData,
    })

    if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || response.statusText)
    }

    return response.json()
}
