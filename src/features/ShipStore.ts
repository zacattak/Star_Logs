import { action, makeAutoObservable } from "mobx"
import { isValidProp } from "../utils/isValidProp"
import { Starship, StarshipDetails } from './Starship'
import { CrewMember } from "./CrewMember"
import { Log } from "./Log"
class ShipsStore {
    baseUrl = 'https://sandbox.codeworksacademy.com/api/starships'
    ships: Starship[] = []
    // activeStarship: Starship | null = null;
    activeStarship: StarshipDetails | null = null;
    starshipCrew: CrewMember[] = [];
    starshipLogs: Log[] = [];


    constructor() {
        makeAutoObservable(this)
    }
}
export const shipsStore = new Proxy(new ShipsStore(), {
    get(target, prop: string) {
        isValidProp(target, prop)
        // @ts-ignore
        return target[prop]
    },
    set(target, prop: string, value) {
        isValidProp(target, prop)
        action(() => {
            // @ts-ignore
            target[prop] = value
        })()
        return true
    }
})