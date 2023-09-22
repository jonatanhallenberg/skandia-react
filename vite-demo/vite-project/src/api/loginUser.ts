type LoginResponse = {
    accessToken: string,
    refreshToken: string
}

export const loginUser = async (username: string, password: string) => {
    // const response = await fetch('http://localhost:5014/api/authentication/login', {
    //     method: 'POST', body: JSON.stringify({
    //         userName: username,
    //         password: password
    //     }),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    // return (await response.json()) as LoginResponse;
    return {
        accessToken: 'mockedAccessToken',
        refreshToken: 'mockedRefreshToken'
    } as LoginResponse;
}