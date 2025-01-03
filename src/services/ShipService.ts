import {
    api
} from './AxiosService'
import {
    AppState
} from '../AppState'

class StarshipService {
    async getStarships() {
        const res = await api.get('api/starships')
        AppState.starships = res.data
    }

    async getStarship(id) {
        const res = await api.get('api/starships/' + id)
        AppState.currentStarship = res.data
        // Handle Fetching crew and logs
    }

}

export const starshipService = new StarshipService()