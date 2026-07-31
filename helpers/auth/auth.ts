import { SignupForm, LoginForm } from "./schema"
import { apiRequest } from "../../network/client"

export async function signup(formData: SignupForm) {
    await apiRequest<SignupForm>('users', { method: 'POST', }, formData)
}

export async function login(formData: LoginForm) {
    await apiRequest<LoginForm>('tokens/authentication', { method: "POST" }, formData)

}
