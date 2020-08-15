const authenticate = async (url, body, onSuccess, onFailure) => {
    try {
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await promise.json()

        const accessToken = response['access_token']

        if (!accessToken) {
            onFailure()
        } else {
            document.cookie = `x-auth-token=${accessToken}`
            onSuccess()
        }
    } catch (e) {
        onFailure(e)
    }
}


export default authenticate