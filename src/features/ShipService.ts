import {
    api
} from '../services/AxiosService'
import {
    AppState
} from '../AppState'
import { shipsStore } from './ShipStore'
import Axios from 'axios'

export const shipsApi = Axios.create({
    baseURL: shipsStore.baseUrl,
    timeout: 8000
})

class StarshipService {
    async getStarships() {
        const response = await fetch(shipsStore.baseUrl)
        const ships = await response.json()
        shipsStore.ships = ships
    }

    async getStarship(id) {
        const response = await shipsApi.get('')
        shipsStore.currentShip = response.data
        // Handle Fetching crew and logs
    }

}

export const starshipService = new StarshipService()