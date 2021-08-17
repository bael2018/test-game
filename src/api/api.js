export const baseURL = 'https://jservice.io/api/'

export const API = {
    get: (initial , query , offset) => {
        return fetch(`${baseURL}${initial}${query}${offset}` , {
            method: 'GET'
        })
    },
}