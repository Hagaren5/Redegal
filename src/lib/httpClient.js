import requests from './Requests'

const base_url = requests.baseURL + requests.fetchAllPhones

export function get() {
    return fetch(base_url)
      .then(resp => resp.json())
}

export function getById(path) {
    return fetch(base_url + path)
      .then(resp => resp.json())
}