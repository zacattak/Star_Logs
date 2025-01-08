import { action, makeAutoObservable } from "mobx"
import { isValidProp } from "../utils/isValidProp"
import { Starship } from './Starship'
class ShipsStore {
    baseUrl = 'https://sandbox.codeworksacademy.com/api/starships'
    ships: Starship[] = []
    activeStarship: Starship | null = null;


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