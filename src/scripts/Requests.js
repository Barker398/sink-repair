//Imports the current state of requests.
import { getRequests } from "./dataAccess.js"

const convertRequests = (request) => {
    return `<li>
        ${request.description} </li>`
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map((request) => convertRequests(request))
                .join("") 
            }
        </ul>
    `

    return html
}
