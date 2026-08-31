import { SignupForm, LoginForm } from "./schema"
import { apiRequest,  } from "../../network/client"
import { APISuccessResponse , APIErrorResponse} from "../../network/reponses"

export async function signup(formData: SignupForm): Promise<APISuccessResponse<SignupForm> | APIErrorResponse<SignupForm>> {
    return await apiRequest<SignupForm>('users', { method: 'POST' }, formData)
}

export async function login(formData: LoginForm): Promise<APISuccessResponse<LoginForm> | APIErrorResponse<LoginForm>> {
    return await apiRequest<LoginForm>('tokens/authentication', { method: "POST" }, formData)
}
