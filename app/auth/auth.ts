export async function signup(formData: FormData) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''


    const response  = await fetch(apiUrl, {
        method:"POST",
        body: formData
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
