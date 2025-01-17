import { api } from '../services/AxiosService'
import { CrewMember } from './CrewMember'
import { Log } from './Log'
import { shipsStore } from './ShipStore'
import { Starship, StarshipDetails } from './Starship'
import Axios from 'axios'

export const shipsApi = Axios.create({
    baseURL: shipsStore.baseUrl,
    timeout: 8000
})

class StarshipService {
    async getStarships() {
        const response = await fetch(shipsStore.baseUrl)

        const shipsData = await response.json()
        // shipsStore.ships = ships

        // const response = await api.get('api/starships');
        shipsStore.ships = shipsData.map((s: Starship) => new Starship(s));
    }

    async getStarship(starshipId: string) {
        // const response = await api.get(`api/starships/${starshipId}`);
        // const ship = new StarshipDetails(response.data);
        // shipsStore.activeStarship = ship
        // Handle Fetching crew and logs
        const response = await shipsApi.get(`/${starshipId}`);
        const ship = new StarshipDetails(response.data);
        shipsStore.activeStarship = ship;
    }

    async getStarshipCrew(starshipId: string) {
        const response = await api.get(`api/starships/${starshipId}/crew`);
        shipsStore.starshipCrew = response.data.map((c: CrewMember) => new CrewMember(c));
    }

    async getStarshipLogs(starshipId: string) {
        const response = await api.get(`api/starships/${starshipId}/logs`);
        shipsStore.starshipLogs = response.data.map((l: Log) => new Log(l));
    }

}

export const starshipService = new StarshipService()