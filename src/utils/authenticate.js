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
        document.cookie = `x-auth-token=${accessToken}`

        if (!accessToken) {
            onFailure()
        } else {
            onSuccess()
        }
    } catch (e) {
        onFailure(e)
    }
}


export default authenticate