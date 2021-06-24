// Asking the API for the requests
const API = "http://localhost:8088"

const applicationState = {
    requests:[]
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

export const fetchRequests = (requests) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(requests)
    }

        return fetch(`${API}/requests`)
        .then(response => response.json())
        .then((serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}


