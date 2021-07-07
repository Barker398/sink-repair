//Imports the current state of requests.
import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const convertRequests = (request) => {
    
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map(request => {
                return `<li>
        ${request.description} <button class="deleteRequests" id="request--${request.id}">delete</button> </li>`
            }) 
                .join("")}
        </ul>
    `

    return html
}


mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

