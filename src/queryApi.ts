import { error } from "console"

export const getData = async () => {
    return fetch(`http://127.0.0.1:5002/getData`,{
        method:'GET',
        redirect: 'follow'
    })
    .then(response => response.text())
    .then(result => result)
    .catch(error => {throw error});
}