import { FormState, SignupFormSchema } from "./schema"

  export async function signup(state: FormState,formData: FormData) {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''   
    const validatedFields = SignupFormSchema.safeParse({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        })
        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.issues,
            }
        }
        const response = await fetch(`${apiUrl}/v1/auth/login`, {
        method: 'POST',
        body: formData,
    })
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
