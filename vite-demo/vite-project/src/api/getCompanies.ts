
export type Company = {
    id: string,
    name: string,
    address: string,
    employees: any[]
}

export const getCompanies = async (accessToken: string) => {
    const response = await fetch('http://localhost:5014/api/companies', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        }
    })
    return (await response.json()) as Company[];
}