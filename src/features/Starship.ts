export class Starship {
    id: string
    name: string
    model: string
    manufacturer: string
    status: boolean
    image: string

    constructor(data: Starship) {
        this.id = data.id
        this.name = data.name
        this.model = data.model
        this.manufacturer = data.manufacturer
        this.status = data.status
        this.image = data.image
        // TODO add additional properties if needed
    }
}
export class StarshipDetails extends Starship {
    crewCapacity: number
    yearCommissioned: string
    starbaseDocked: string
    missions: string[]
    notableFeatures: string[]
    historicalEvents: string[]
    weaponSystems: string[]
    crewCount: number
    logCount: number

    constructor(data: StarshipDetails) {
        super(data);
        this.crewCapacity = data.crewCapacity;
        this.yearCommissioned = data.yearCommissioned;
        this.starbaseDocked = data.starbaseDocked;
        this.missions = data.missions;
        this.notableFeatures = data.notableFeatures;
        this.historicalEvents = data.historicalEvents;
        this.weaponSystems = data.weaponSystems;
        this.crewCount = data.crewCount;
        this.logCount = data.logCount;
    }
}

// {
//     "id": 1,
//     "name": "CR90 corvette",
//     "model": "CR90 corvette",
//     "manufacturer": "Corellian Engineering Corporation",
//     "status": "active",
//     "image": "https://starwars-visualguide.com/assets/img/starships/2.jpg"
//   }