import { FormState, SignupFormSchema } from "./schema"

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
    console.log("🚀 ~ signup ~ formData:", formData.get('passowrd'))
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword')
    })
    console.log("🚀 ~ signup ~ validatedFields:", validatedFields)
    if (!validatedFields.success) {
        return {
            errors: z.treeifyError(validatedFields.error).properties,
        }
    }
    const response = await fetch(`${apiUrl}/v1/users`, {
        method: 'POST',
        body: formData,
    })
    console.log("🚀 ~ signup ~ response:", response)
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
